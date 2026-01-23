import { useState } from "react";
import DisplayBox from "./DisplayBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";

export default function CurrencyBox() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  console.log(currencyInfo);

  // since we only need keys to display in the currency options
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <>
      <DisplayBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setAmount(currency)}
        selectCurrency={fromCurrency}
      />

      <button
        className="mt-10 bg-blue-500 p-4 rounded-md font-bold text-2xl text-black"
        onClick={swap}
      >
        Swap
      </button>

      <DisplayBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setToCurrency(currency)}
        selectCurrency={toCurrency}
        amountDisabled
      />

      <button
        className="mt-10 bg-blue-500 p-4 rounded-md font-bold text-2xl text-black"
        onClick={convert}
      >
        Convert {fromCurrency} To {toCurrency}
      </button>
    </>
  );
}
