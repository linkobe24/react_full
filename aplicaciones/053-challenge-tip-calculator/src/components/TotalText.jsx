export default function TotalText({ bill, tip, friendTip }) {
    const calculatedTip = parseFloat(
        (((tip + friendTip) / 2) * bill).toFixed(2)
    )
    return (
        <h1>
            You pay ${bill + calculatedTip} (${bill} + ${calculatedTip} tip)
        </h1>
    )
}
