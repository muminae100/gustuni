import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from '../Firebase';

const provider = new GoogleAuthProvider();

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [seePsw, setSeePsw] = useState(false);
    const [seeConfirmPsw, setSeeConfirmPsw] = useState(false);

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


    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
    <div className="body">
    {/* sign Up begins here  */}
    <div className="container-fluid">
        <div className="row px-3">
            <div className="col-lg-12 col-xl-12 card flex-row mx-auto px-0">
                <div className="img-left d-none d-md-flex"></div>
                {/* sign up card begins here */}
                <div className="card-body">
                    <h4 className="title text-center mt-1">Sign Up</h4>
                    {/* sign up form begins here  */}
                    <form className="form-box px-3">
                        {/* firstname input  */}
                        <div className="form-input mb-2">
                            <label htmlFor="fname"></label>
                            <input type="text" name="fname" placeholder="Enter First Name" required />
                        </div>

                        {/* lastname input */}
                        <div className="form-input mb-2">
                            <label htmlFor="lname"></label>
                            <input type="text" name="lname" placeholder="Enter Last Name" required />
                        </div>

                        {/* email input */}
                        <div className="form-input mb-2">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter e-mail address" tabIndex="10" required />
                        </div>

                         {/* psw1 input */}
                        <div className="form-input mb-2">
                            <label htmlFor="psw1"></label>
                            <input type={seePsw? 'text' : 'password' } name="psw" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Enter password" required />
                            {seePsw? (<i onClick={() =>setSeePsw(false)} className="fa-solid fa-eye-low-vision passw password-eye"></i>) : ( <i className="fa-solid fa-eye passw password-eye" onClick={() =>setSeePsw(true)}></i>)}

                        </div>

                         {/* psw2 input */}
                         <div className="form-input mb-2">
                            <label htmlFor="psw2"></label>
                            <input type={seeConfirmPsw? 'text' : 'password' } name="psw" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />
                            {seeConfirmPsw? (<i onClick={() =>setSeeConfirmPsw(false)} className="fa-solid fa-eye-low-vision passw password-eye"></i>) : ( <i className="fa-solid fa-eye passw password-eye" onClick={() =>setSeeConfirmPsw(true)}></i>)}
                        </div>

                        {/* t&c agree checkbox */}
                        <div className="mb-2">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input mr-2" id="cb1" name="cb1" />
                                <label className="custom-control-label" htmlFor="cb1"></label>
                                <span> By creating an account you have read and agreed with our &nbsp;
                                <a href="#" className="terms-cond-link forget-link">
                                    terms & conditions
                                </a>
                            </span>
                            </div>
                        </div>

                        {/* sign up btn */}
                        <div className="mb-2">
                            <button className="btn btn-success btn-block" type="submit"  onClick={register}>Sign Up</button>
                        </div>

                        <div className="text-center mb-2 mt-2">
                            or sign up with
                        </div>

                        {/* socila sign up links */}
                        <div className="row mb-3">

                            {/* google link  */}
                            <div>
                                <div onClick={signInGoogle} className="btn btn-block btn-social btn-google">
                                    <i className="fab fa-google"></i>
                                </div>
                            </div>

                        </div>

                        <hr className="my-3" />

                        {/* Already ahve an account link  */}
                        <div className="text-center mb-2">
                            Already have an account?
                            <Link className="register-link" to="/login">Log In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* Sign Up ends here */}
    </div>
  )
}

export default Register;