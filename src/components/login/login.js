
import Link from "next/link";

export default function Login(){
  return(
   
            

            <div className="login-box">
        <div className="close--btn">
            <div className="wrap">
                <a href="index.html" ><i className="fa-solid fa-xmark"></i></a>
            </div>
        </div>
        
        <h4 className="title">Create Your Account</h4>
        <div className="mb-4 form-group">
            <label className="mb-2">User name</label>
            <input className="form_control" placeholder="User name" />
        </div>
        <div className="mb-4 form-group">
            <label className="mb-2">Email</label>
            <input className="form_control" placeholder="Name" />
            </div>
        <div className="mb-4 form-group">
            <label className="mb-2">Passwords</label>
            <input className="form_control" placeholder="Name" />
        </div>
        <div className="mb-4 form-group">
            <label className="mb-2">Confirm Passwords</label>
            <input className="form_control" placeholder="Name" />
        </div>
        <div className="login-meta mb-4" data-wow-delay="0.5s">
            <div className="form--check">
                <input className="form-check-input" type="checkbox" value="" />
            </div>
            <div className="condition-text">
                <p>I agree with Company, <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a></p>
            </div>
        </div>
        <button className="btn btn--base w-100">Sign Up</button>
        <div className="social-option">
            <div className="text">
                <h6>or</h6>
            </div>
            <ul>
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
            <p> Already have an account ? <Link href='/login'>Log In</Link></p>
        </div>
    </div>
           
  )
}