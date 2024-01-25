import axios from "./axios";
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const hobbyRef = useRef();
  const history = useHistory();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    try {
      await axios.post("/user/register", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        hobby: hobbyRef.current.value,
      });
      history.replace("/");
    } catch (err) {
      console.error("Error object:", err);
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        // If 'err.response' is undefined or 'err.response.data' is undefined
        setError("An unexpected error occurred.");
      }
    }
  }
  return (
    <div className="login">
      <div className="card1">
        <h1>QuickDrive</h1>
        {/* <h2 className="text-muted">Major Project</h2> */}
      </div>
      <div className="card2">
        <h1>Sign Up</h1>
        {error && <span className="errorMessage">{error}</span>}
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <span class="material-icons-outlined">person_outline</span>
            <input ref={usernameRef} placeholder="Username" type="text" />
          </div>

          <div className="inputContainer">
            <span class="material-icons-outlined">lock</span>
            <input ref={passwordRef} placeholder="Password" type="password" />
          </div>
          <div className="inputContainer">
            <span class="material-icons-outlined">add</span>
            <input ref={hobbyRef} placeholder="Hobbies" type="text" />
          </div>
          <div className="loginBtn">
            <button type="submit">Register</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login.</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
