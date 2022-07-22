import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="div-center" style={{ padding: 50 }}>
      <form>
        <div className="mt-5 m-1  ">
          <label HtmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control  w-25 "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text m-1">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="m-1">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control w-25 "
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="m-1 form-check">
          <input
            type="checkbox"
            className="form-check-input "
            id="exampleCheck1"
            checked
          ></input>
          <label className="form-check-label" HtmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <Link to="/admin">
          <button type="submit" className="btn btn-dark m-1">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
