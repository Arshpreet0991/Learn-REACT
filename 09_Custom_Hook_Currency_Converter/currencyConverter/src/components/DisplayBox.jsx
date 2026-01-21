export default function DisplayBox({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <>
      <div className="bg-white p-4 rounded-md mt-10 text-black flex gap-5 w-2xl items-center justify-between">
        <div className="flex gap-5 flex-col">
          <label htmlFor="amount" className="text-3xl font-bold ">
            {label}
          </label>
          <input
            className="bg-white text-3xl rounded-md"
            placeholder="Enter Amount..."
            type="number"
            id="amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>

        <div className="flex gap-5 flex-col">
          <label htmlFor="currencyType" className="text-2xl font-bold">
            Currency Type
          </label>
          <select
            name=""
            id="currencyType"
            className="text-2xl font-bold bg-white rounded-md"
            disabled={currencyDisabled}
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
