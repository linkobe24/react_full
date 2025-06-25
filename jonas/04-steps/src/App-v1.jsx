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
                    <p className="message">{messages[step - 1]}</p>
                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: '#7950f2',
                                color: 'white',
                            }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: '#7950f2',
                                color: 'white',
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
