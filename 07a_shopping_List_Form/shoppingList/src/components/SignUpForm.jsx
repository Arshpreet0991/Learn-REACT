import { useState, useId } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const newValue = evt.target.value; // current value inside my text box

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold mb-7">Sign Up</p>
        <input
          type="text"
          className="text-black text-2xl bg-white rounded-sm p-2"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <input
          type="text"
          className="text-black text-2xl bg-white rounded-sm p-2"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        />

        <button>Submit</button>
      </div>
    </>
  );
}
