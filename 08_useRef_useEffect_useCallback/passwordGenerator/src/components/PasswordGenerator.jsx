import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberToggle, setNumberToggle] = useState(false);
  const [splCharToggle, setSplCharToggle] = useState(false);
  const [password, setPassword] = useState("");

  // function to generate password
  const generatePassword = () => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvw";
    let nums = "0123456789";
    let splCharacters = "!@##$%^&*()_";

    if (numberToggle) str = str + nums;
    if (splCharToggle) str = str + splCharacters;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    setPassword(password);
  };

  // function to copy password to clipboard
  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  // memoize the function to optimize the use of function which will be called a lot when state changes

  useCallback(generatePassword, [
    length,
    numberToggle,
    splCharToggle,
    setPassword,
  ]);

  // use effect- run a function whenever a state changes
  useEffect(() => {
    generatePassword();
  }, [length, splCharToggle, numberToggle]);

  // use Ref Hook
  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="mb-10">Random Password Generator</h1>
      <div className="bg-gray-400 rounded-md p-5 ">
        <div className="flex items-center justify-center text-center">
          <input
            type="text"
            name="passwordText"
            id="passwordText"
            className="bg-white p-2 rounded-l-md w-xl text-orange-600 font-bold text-3xl"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className="mt-5 flex gap-10 items-center justify-center text-center text-2xl text-black font-bold">
          <div>
            <input
              type="range"
              id="length"
              className="cursor-pointer"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length"> Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="numbers"
              value={numberToggle}
              onChange={() => setNumberToggle((prev) => !prev)}
            />
            <label htmlFor="numbers"> Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="splChar"
              value={splCharToggle}
              onChange={() => setSplCharToggle((prev) => !prev)}
            />
            <label htmlFor="splChar"> Spl. Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
