import { useState } from "react";

export default function MultipleInputsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <h1>Sign Up Form</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id="fName"
            className="bg-amber-50 text-2xl text-black mt-10 p-2 rounded-md mr-5"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            id="Lname"
            className="bg-amber-50 text-2xl text-black mt-10 p-2 rounded-md mr-5"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
