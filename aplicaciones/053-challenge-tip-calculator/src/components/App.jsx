import BillInput from './BillInput'
import PercentageInput from './PercentageInput'
import TotalText from './TotalText'
import Button from './Button'
import { useState } from 'react'

export default function App() {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState(0)
    const [friendTip, setFriendTip] = useState(0)

    function handleReset() {
        setBill('')
        setTip(0)
        setFriendTip(0)
    }

    return (
        <>
            <BillInput
                bill={bill}
                onBill={setBill}
            />
            <PercentageInput
                tip={tip}
                onTip={setTip}
            >
                How did you like the service?
            </PercentageInput>
            <PercentageInput
                tip={friendTip}
                onTip={setFriendTip}
            >
                How did your friend like the service?
            </PercentageInput>
            {bill ? (
                <>
                    <TotalText
                        bill={bill}
                        tip={tip}
                        friendTip={friendTip}
                    />
                    <Button onReset={handleReset} />
                </>
            ) : null}
        </>
    )
}
