import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, decrementFromCart } from "../../redux/cartSlice";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import QuantityButtons from "../../components/QuantityButtons/QuantityButtons";
import { useState } from "react";
import Button from "../../components/Button/Button";

function getCategoryName(categories, categoryId) {
  const category = categories.find((category) => category.id === categoryId);
  return category ? category.title : "";
}

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const products = useSelector((state) => state.data.products);
  const categories = useSelector((state) => state.data.categories);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return (
      <div>
        <h2>Error</h2>
        <p>Product not found</p>
      </div>
    );
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        discont_price: product.discont_price,
        quantity,
      })
    );
  };

  const breadcrumbs = [
    {
      to: "/",
      label: "Main Page",
      isActive: false,
    },
    {
      to: "/categories",
      label: "Categories",
      isActive: false,
    },
    {
      to: `/categories/${product.categoryId}`,
      label: getCategoryName(categories, product.categoryId),
      isActive: false,
    },
    {
      to: `/products/${productId}`,
      label: product.title,
      isActive: true,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p>Product Details Page</p>
      <p>Product ID: {productId}</p>
      <QuantityButtons
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <Button onClick={handleAddToCart}>Add to cart</Button>
      <pre>
        {JSON.stringify(product, null, 2)}
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  );
}
