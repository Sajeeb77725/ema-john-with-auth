import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SingUp.css";
import auth from "../../firebase.init";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const nevigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };

  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

  if (user) {
    nevigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      setError("Did not match those password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 charecter or logner");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-form">
      <div>
        <h2>Sing Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Sing Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
