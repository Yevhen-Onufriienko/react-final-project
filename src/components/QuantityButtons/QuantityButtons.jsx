export default function QuantityButtons({
  quantity,
  onDecrement,
  onIncrement,
}) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
