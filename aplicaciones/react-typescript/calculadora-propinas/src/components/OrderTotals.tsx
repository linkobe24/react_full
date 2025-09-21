import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmout = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );

  const tipAmount = useMemo(() => subtotalAmout * tip, [tip, subtotalAmout]);

  const totalAmount = useMemo(
    () => subtotalAmout + tipAmount,
    [tipAmount, subtotalAmout],
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmout)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="mt-10 w-full cursor-pointer bg-black p-3 font-bold text-white uppercase disabled:cursor-auto disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
