import { Link } from "react-router-dom";

const ConclusionSection = () => {
  return (
    <div className="container-fluid mb-1">
    <div className="row">
        <div className="col-sm-12 d-flex justify-content-center">
            <div className="container my-1 text-center">
                <div className="i-tems">
                    <h3 className="text-center text-black">Thank you for taking time to explore our platform</h3>
                    <p className="text-center">Now create account to like and save tracks, follow your favourite artists and build playlists. All for free.</p>
                    <div className="container text-center">
                       <Link to="/register" className="btn btn-success btn-md mb-3">Create Account</Link>
                       <span className="d-block mb-3">
                        Already have an account?
                        <Link to="/login" className="text-decoration-none mb-4">Login</Link>
                       </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ConclusionSection;