import { useState } from "react";

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;

    setFormData((currData) => {
      return { ...currData, [name]: name === "age" ? Number(value) : value };
      //   name === "age": if name is equal to age
      //   ? Number(value) : condition: add age as Number
      //   : value - else, [name]:value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
    setFormData({ firstName: "", lastName: "", age: "" });
  };

  return (
    <>
      <form>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Registration Form</h1>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="bg-white text-black"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="bg-white text-black"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="age"
            id="age"
            className="bg-white text-black"
            placeholder="Age"
            value={formData.age}
            onChange={handleOnChange}
          />

          <button
            className="bg-white text-2xl text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
