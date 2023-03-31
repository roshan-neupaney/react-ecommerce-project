import React from 'react'
import { Link } from 'react-router-dom';


export default function SigninBox() {
  return (
    <>
    <div className="signInContainer">
        <div className="welcomeText">
          <h1>Welcome</h1>
          <h5>Please enter your details</h5>
        </div>
        <div className="mb-3 signInInput">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <br />
          <input
            type="email"
            className="form-control"
            id="signInEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3 signInInput">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            className="form-control"
            id="signInPassword"
            placeholder="Enter your Password"
          />
        </div>
        <div className="form-check ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
            Remember me
          </label>
          <Link className="forgetPassword" to="">Forget Password?</Link>
        </div>
        <button type="button" className="btn btn-primary my-3 signIn">
          Sign in
        </button>
      </div>
      </>
  )
}
