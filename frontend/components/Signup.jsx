import React from "react";

const Signup = () => {
  let email;
  let password;
  return (
    <div className="signup">
      <form className="signup_form" action="">
        <h3>Welcome to Pillow</h3>
        <div>Email</div>
        <input type="text" placeholder="Enter Email" value={email}/>
        <br />
        <br />
        <div>Password</div>
        <input type="password" placeholder="Create Password" value={password}/>
        <div>At least 8 characters</div>
        <div>Mix of letters and numbers</div>
        <div>At least 1 special character</div>
        <div>At least 1 lowercase letter and 1 uppercase letter</div>
        <br />
        <button>Submit</button>
        <div>By submitting, I accept Pillow's terms of use.</div>
        <br />
        <div>Or connect with:</div>
        <a href="">Continue with Apple</a>
        <br />
        <a href="">Continue with Facebook</a>
        <br />
        <a href="">Continue with Google</a>
      </form>
    </div>
  )
}

export default Signup;