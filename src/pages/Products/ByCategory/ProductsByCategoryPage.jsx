import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductsByCategoryPage() {
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products by category ID
    setIsLoading(true);
    axios
      .get(`http://localhost:3333/categories/${categoryId}`)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.data);
          setCategoryName(response.data.category.title);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("An error occurred fetching data. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{categoryName}</h1>
      {error && (
        <p
          style={{
            color: "red",
            backgroundColor: "pink",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {error}
        </p>
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
