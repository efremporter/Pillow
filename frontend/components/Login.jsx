import React from "react";

const Login = () => {
  let email;
  let password;
  return (
    <div className="login">
      <form className="login_form" action="">
        <h3>Welcome to Pillow</h3>
        <div>Email</div>
        <input type="text" placeholder="Enter Email" value={email}/>
        <br />
        <br />
        <div>Password</div>
        <input type="password" placeholder="Enter Password" value={password}/>
        <br />
        <br />
        <button>Sign In</button>
        <br />
        <br />
        <a href="">Forgot your password?</a>
        <br />
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

export default Login;