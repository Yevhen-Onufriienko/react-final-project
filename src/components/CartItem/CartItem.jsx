import { useDispatch } from "react-redux";
import {
  removeItem,
  addToCart,
  decrementFromCart,
} from "../../redux/cartSlice";
import QuantityButtons from "../QuantityButtons/QuantityButtons";

// Корзина покупок

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        discont_price: item.discont_price,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      decrementFromCart({
        id: item.id,
      })
    );
  };

  const handleDelete = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <li style={{ padding: "5px", border: "2px solid black" }}>
      <p>
        ID: {item.id}, title: {item.title}
      </p>
      <QuantityButtons
        quantity={item.quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      {item.discont_price && (
        <p>Dicounted Price: {item.discont_price * item.quantity}</p>
      )}
      <button onClick={handleDelete}>X</button>
    </li>
  );
}
