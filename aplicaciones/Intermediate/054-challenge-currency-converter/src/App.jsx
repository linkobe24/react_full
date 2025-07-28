// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const convert = async () => {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        );
        const data = await res.json();
        const convertedAmount = (amount * data.rates[to]).toFixed(2);
        setConverted(convertedAmount);
        setIsLoading(false);
      };
      if (amount < 0) return;
      if (from === to) {
        setConverted(amount);
        return;
      }
      convert();
    },
    [amount, from, to]
  );

  function handleFromSelect(e) {
    setFrom(e.target.value);
  }

  function handleToSelect(e) {
    setTo(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
        disabled={isLoading}
      />
      <select onChange={(e) => handleFromSelect(e)} value={from}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => handleToSelect(e)} value={to}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{isLoading ? "Calculating..." : converted}</p>
    </div>
  );
}
