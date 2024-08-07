import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './ProductContainer.module.css';
import ProductCards from '../ProductCards/ProductCards';
import API_URL from '../../api';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`);
        // Фильтруем товары, чтобы оставить только те, у которых есть discont_price
        const discountedProducts = response.data.filter(product => product.discont_price);
        // Ограничиваем количество товаров до 4
        setProducts(discountedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="Container">
      <div className={styles.ProductContainer}>
        
        <div className={styles.titleBlock}>
          <h2>Sale</h2>
          <div className={styles.titleBlockLine}></div>
          <Link to="/discounted-products" className={styles.titleBlockButton}>
            All sales
          </Link>
        </div>

        <ul className={styles.gridProductContainer}>
          {products.slice(0, 4).map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default ProductContainer;

// import { API_URL } from "../../api";
// import styles from "./ProductContainer.module.css";

// export default function ProductContainer({ products }) {
//   return (
//     <div className={styles.ProductContainer}>
//       {products.map((product) => {
//         return (
//           <div className={styles.ProductCard} key={product.id}>
//             <div className={styles.ProductTop}>
//               <img src={API_URL + product.image} alt={product.title} />
//             </div>
//             <div className={styles.ProductBottom}>
//               <h3>{product.title}</h3>
//               <p>{product.price}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
