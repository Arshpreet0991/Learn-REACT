import { useEffect, useState, useRef } from "react";

export default function PswGen() {
  const [psw, setPsw] = useState({
    length: 8,
    password: "",
    numberToggle: false,
    charToggle: false,
  });

  const handleChange = (evt) => {
    const { name, value, checked } = evt.target;
    setPsw((prev) => {
      return {
        ...prev,
        [name]:
          name === "numberToggle" || name === "charToggle"
            ? checked
            : Number(value),
      };
    });
  };

  // function to generate password
  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvw";
    let nums = "0123456789";
    let splCharacters = "!@##$%^&*()_";

    if (psw.numberToggle) str = str + nums;
    if (psw.charToggle) str = str + splCharacters;

    for (let i = 1; i <= psw.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPsw((prev) => {
      return { ...prev, password: pass };
    });
  };

  useEffect(() => {
    generatePassword();
  }, [psw.length, psw.charToggle, psw.numberToggle]);

  // copy function
  const copyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(psw.password);
  };

  // use Ref Hook
  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="mb-10">Random Password Generator</h1>
      <div className="bg-gray-400 rounded-md p-5 ">
        <div className="flex items-center justify-center text-center">
          <input
            type="text"
            name="password"
            id="passwordText"
            className="bg-white p-2 rounded-l-md w-xl text-orange-600 font-bold text-3xl"
            placeholder="Password"
            readOnly
            value={psw.password}
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className="mt-5 flex gap-10 items-center justify-center text-center text-2xl text-black font-bold">
          <div>
            <input
              type="range"
              id="length"
              className="cursor-pointer"
              min={6}
              max={20}
              name="length"
              value={psw.length}
              onChange={handleChange}
            />
            <label htmlFor="length"> Length: {psw.length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="numbers"
              name="numberToggle"
              checked={psw.numberToggle}
              onChange={handleChange}
            />
            <label htmlFor="numbers"> Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="splChar"
              name="charToggle"
              checked={psw.charToggle}
              onChange={handleChange}
            />
            <label htmlFor="splChar"> Spl. Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
