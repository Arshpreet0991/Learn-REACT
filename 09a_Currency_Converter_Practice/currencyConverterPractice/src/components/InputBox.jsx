export default function InputBox({
  label,
  inputAmount,
  setInputAmount,
  selectedCurrency,
  setSelectedCurrency,
  currencyOptions = [],
}) {
  return (
    <>
      <div className="bg-gray-300 p-4 flex gap-5 items-center justify-between">
        <label htmlFor="currency">{label}</label>
        <input
          type="number"
          id="currency"
          className="bg-white text-black"
          value={inputAmount}
          onChange={(e) => setInputAmount(Number(e.target.value))}
        />

        <select
          id="currencyOptions"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
