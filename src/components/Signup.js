import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
