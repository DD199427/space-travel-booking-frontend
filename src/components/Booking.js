import { useState } from "react";
import axios from "axios";

function Booking() {
  const [destination, setDestination] = useState("Lunar Hotel");
  const [travelClass, setTravelClass] = useState("Luxury");
  const username = localStorage.getItem("username") || "testuser"; // Simulated session

  const handleBooking = async () => {
    try {
      await axios.post("https://your-backend.onrender.com/book", {
        username,
        destination,
        travelClass,
      });
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed: " + error.response.data.detail);
    }
  };

  return (
    <div>
      <h2>Book Your Space Trip</h2>
      <select onChange={(e) => setDestination(e.target.value)}>
        <option value="Lunar Hotel">Lunar Hotel</option>
        <option value="Space Station">Space Station</option>
      </select>
      <select onChange={(e) => setTravelClass(e.target.value)}>
        <option value="Luxury">Luxury</option>
        <option value="Deluxe">Deluxe</option>
        <option value="VIP Zero Gravity">VIP Zero Gravity</option>
        <option value="Economy">Economy</option>
      </select>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default Booking;
