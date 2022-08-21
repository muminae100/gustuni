import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore/lite';
import { auth, db } from '../Firebase';

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePsw, setSeePsw] = useState(true);

    const signInGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user){
            navigate('/')
        }
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
    }

    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (userCredential){
                navigate('/')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });


    }

  return (
    // login form begins here
    <div className="body">
    <div className="container-fluid">
        <div className="row px-3">
            <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                <div className="img-left d-none d-md-flex"></div>
              {/* log in card starts here  */}
                <div className="card-body">
                    <h4 className="title text-center mt-3">Log In</h4>
                    {/* log in form */}
                    <form className="form-box px-3 needs-validation" noValidate>
                        {/* email input */}
                        <div className="form-input">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter e-mail address" tabIndex="10" required />
                            <div className="invalid-feedback">
                                Valid e-mail is required.
                            </div>
                        </div>

                        {/* psw input */}
                        <div className="form-input">
                            <label htmlFor="psw"></label>
                            <input type={seePsw? 'text' : 'password' } name="psw" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  required id="passwo" />

                            {seePsw? (<i onClick={() =>setSeePsw(false)} className="fa-solid fa-eye-low-vision passw password-eye"></i>) : ( <i className="fa-solid fa-eye passw password-eye" onClick={() =>setSeePsw(true)}></i>)}

                            <div className="invalid-feedback">
                                wrong Password
                            </div>
                        </div>

                        {/* Remember me checkbox */}
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cb1" name="cb1" required />
                                <label className="custom-control-label" htmlFor="cb1"></label>
                                <a href="_" style={{"textDecoration": "none", "color": "#5cb85c"}}> Remember me</a>
                            </div>
                        </div>

                         {/* login btn */}
                        <div className="mb-3">
                            <button className="btn btn-success btn-block" type="submit"  onClick={signIn}>Log in</button>
                        </div>

                        {/* frgt psw link */}
                        <div className="text-end">
                            <Link className="forget-link" to="/passwordreset">Forgot Password?</Link>
                        </div>

                        <div className="text-center mb-3 mt-2">
                            or log in with
                        </div>

                        {/* social login links */}
                        <div className="row mb-3">

                            {/* google link */}
                            <div>
                                <div onClick={signInGoogle} className="btn btn-block btn-social btn-google">
                                    <i className="fab fa-google"></i>
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        {/* Don't have an account link */}
                        <div className="text-center mb-2">
                            Don't have an account?
                            <Link to="/register" className="register-link">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

    // login form ends here

  )
}

export default Login;