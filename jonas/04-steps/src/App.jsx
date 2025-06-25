const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
]

import { useState } from 'react'
import './index.css'

export default function App() {
    return (
        <>
            <Steps />
        </>
    )
}

function Steps() {
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function handlePrevious() {
        step > 1 && setStep((s) => s - 1)
    }

    function handleNext() {
        step < 3 && setStep((s) => s + 1)
    }

    return (
        <>
            <button
                className="close"
                onClick={() => setIsOpen((s) => !s)}
            >
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <ul className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </ul>
                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>
                    <div className="buttons">
                        <Button
                            textColor="white"
                            bgColor="#7950f2"
                            onClick={handlePrevious}
                        >
                            <span>👈</span> Previous
                        </Button>
                        <Button
                            textColor="white"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    )
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
