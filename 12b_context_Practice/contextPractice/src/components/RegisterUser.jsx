import React, { useState } from "react";
import useUser from "../context/user";

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // use context
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ firstName, lastName });
  };

  return (
    <>
      <div className="flex gap-5 flex-col justify-center items-center">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter First Name"
            className="bg-white p-2 text-2xl"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="bg-white p-2 text-2xl"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 p-3 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
