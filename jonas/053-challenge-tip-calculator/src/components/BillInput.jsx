export default function BillInput({ bill, onBill }) {
    return (
        <div className="text-input">
            <p>How much was the bill?</p>
            <input
                type="number"
                value={bill}
                onChange={(e) => onBill(Number(e.target.value))}
            />
        </div>
    )
}
