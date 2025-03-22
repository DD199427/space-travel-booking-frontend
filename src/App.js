import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
