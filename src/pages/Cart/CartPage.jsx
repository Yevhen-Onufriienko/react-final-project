import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import { removeItem } from "../../redux/cartSlice";

import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    dispatch(
      openModal({
        title: "Order Placed",
        content: (
          <>
            <p>Your order has been placed successfully.</p>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: {totalPrice}</p>
          </>
        ),
      })
    );
  }

  return (
    <div>
      <p>Cart Page</p>
      {cartItems.length === 0 ? (
        <div>
          <p>Cart is empty</p>
          <Link to="/products">Continue shopping</Link>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
      <Button onClick={handlePlaceOrder}>Place order</Button>
    </div>
  );
}
