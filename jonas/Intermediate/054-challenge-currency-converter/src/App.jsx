// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react'

export default function App() {
  const [amount, setAmount] = useState('USD')
  const [from, setFrom] = useState('EUR')
  const [to, setTo] = useState('')
  const [converted, setConverted] = useState('')

  useEffect(
    function () {
      const convert = async () => {
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        )
        const data = await res.json()
        const convertedAmount = (Number(amount) * data.rates[to]).toFixed(2)
        setConverted(convertedAmount)
      }
      convert()
    },
    [amount, from, to]
  )

  function handleFromSelect(e) {
    setFrom(e.target.value)
  }

  function handleToSelect(e) {
    setTo(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => handleFromSelect(e)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => handleToSelect(e)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </div>
  )
}
