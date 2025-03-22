import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      await axios.post("https://your-backend.onrender.com/signin", {
        username,
        password,
      });
      alert("Login successful!");
      navigate("/booking");
    } catch (error) {
      alert("Login failed: " + error.response.data.detail);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}

export default Signin;
