import { useState } from "react";
import useCurrencyInfo from "./hooks/usCurrencyInfo.js";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [inputAmount, setInputAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // get the data from hook
  const currencyInfo = useCurrencyInfo(selectedCurrency);

  // get the keys of the object to form the dropdown list
  const currencyOptions = Object.keys(currencyInfo);

  return (
    <>
      <h1 className="text-5xl m-10 text-white">Currency Converter</h1>
      <InputBox
        label="From"
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currencyOptions={currencyOptions}
      />
      <button className="bg-blue-500 p-2 m-3 rounded-md">Swap</button>
      <InputBox
        label="To"
        inputAmount={convertedAmount}
        setInputAmount={setConvertedAmount}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currencyOptions={currencyOptions}
      />
      <button className="bg-blue-500 p-2 m-3 rounded-md">Convert</button>
    </>
  );
}

export default App;
