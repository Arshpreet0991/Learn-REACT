import { useState } from "react";
export default function UsernameForm() {
  const [username, setUsername] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <h1>Reading the user input, the react way</h1>
      <div>
        <label htmlFor="user">Enter Username</label>
        <input
          type="text"
          id="user"
          placeholder="username"
          className="bg-amber-50 text-2xl text-black mt-10 p-2 rounded-md mr-5"
          value={username}
          onChange={updateUsername}
        />
        <button>Submit</button>
      </div>
    </>
  );
}
