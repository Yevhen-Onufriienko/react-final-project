import { API_URL } from "../../api";
import styles from "./ProductContainer.module.css";

export default function ProductContainer({ products }) {
  return (
    <div className={styles.ProductContainer}>
      {products.map((product) => {
        return (
          <div className={styles.ProductCard} key={product.id}>
            <div className={styles.ProductTop}>
              <img src={API_URL + product.image} alt={product.title} />
            </div>
            <div className={styles.ProductBottom}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
