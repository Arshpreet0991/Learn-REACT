import React from "react";
import { useState, useContext } from "react";
import RegisterContext from "../context/RegisterContext.js";

function Register() {
  const [name, setName] = useState("");

  const { setUser } = useContext(RegisterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placholder="Enter Name"
          className="p-2 text-2xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </>
  );
}

export default Register;
