import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("https://your-backend.onrender.com/signup", {
        username,
        password,
      });
      alert("Signup successful! Please log in.");
      navigate("/");
    } catch (error) {
      alert("Signup failed: " + error.response.data.detail);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
