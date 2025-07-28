import { useState } from 'react'
import './index.css'

export default function App() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const handleCountIncrease = () => setCount((s) => s + step)
    const handleCountDecrease = () => setCount((s) => s - step)

    const handleStepIncrease = () => setStep((s) => s + 1)
    const handleStepDecrease = () => setStep((s) => s - 1)

    return (
        <div className="container">
            <Counter
                content="Step"
                onHandleDecrease={handleStepDecrease}
                onHandleIncrease={handleStepIncrease}
                count={step}
            />
            <Counter
                content="Count"
                onHandleDecrease={handleCountDecrease}
                onHandleIncrease={handleCountIncrease}
                count={count}
                incrementStep={step}
            />
            <Days days={count} />
        </div>
    )
}

function Counter({ content, onHandleDecrease, onHandleIncrease, count }) {
    return (
        <div className="counter-container">
            <button onClick={onHandleDecrease}>-</button>
            <p>
                {content}: {count}
            </p>
            <button onClick={onHandleIncrease}>+</button>
        </div>
    )
}

function Days({ days }) {
    const today = new Date()
    const offsetDate = new Date()
    offsetDate.setDate(today.getDate() + days)
    const formattedOffsetDate = offsetDate.toDateString()

    return (
        <p>
            {!days
                ? 'Today is '
                : days > 0
                ? `${days} days from today is `
                : `${Math.abs(days)} days ago was `}
            {formattedOffsetDate}
        </p>
    )
}
