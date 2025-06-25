import { useState } from 'react'

export default function App() {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(1)

    const handleCountIncrease = () => {
        setCount((s) => s + step)
    }

    const handleCountDecrease = () => {
        setCount((s) => s - step)
    }

    const today = new Date()
    const offsetDate = new Date()
    offsetDate.setDate(today.getDate() + count)
    const formattedOffsetDate = offsetDate.toDateString()

    return (
        <div className="container">
            <label htmlFor="step">
                <input
                    min={1}
                    max={10}
                    type="range"
                    id="step"
                    onChange={(e) => setStep(Number(e.target.value))}
                    value={step}
                />
                <span>{step}</span>
            </label>
            <div className="count">
                <button onClick={handleCountDecrease}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={handleCountIncrease}>+</button>
            </div>
            <p>
                {!count
                    ? 'Today is '
                    : count > 0
                    ? `${count} days from today is `
                    : `${Math.abs(count)} days ago was `}
                {formattedOffsetDate}
            </p>
        </div>
    )
}
