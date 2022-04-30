import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const hancleUserSingIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/shop");
  }
  return (
    <div className="login-form">
      <div>
        <h2>Log In</h2>
        <form onSubmit={hancleUserSingIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" placeholder="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Log In" />
        </form>
        <p>
          New Here?{" "}
          <Link className="form-link" to="/singup">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
