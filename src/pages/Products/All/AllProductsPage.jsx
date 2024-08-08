import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import ProductCard from "../../../components/ProductCards/ProductCards";
import Filter from "../../../components/FilterContainer/Filter/Filter";
import DiscountedItems from "../../../components/FilterContainer/DiscountedItems/DiscountedItems";
import SelectSort from "../../../components/FilterContainer/SelectSort/SelectSort";
import styles from "./AllProductsPage.module.css";
import API_URL from '../../../api';

function AllProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "default");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}/products/all`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        setError("An error occurred fetching data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
      const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;
      const includeDiscount = searchParams.get("includeDiscount") === "true";

      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }

      if (includeDiscount && !product.discont_price) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortType === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortType === "priceHighToLow") {
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      }
      if (sortType === "priceLowToHigh") {
        return (a.discont_price || a.price) - (b.discont_price || b.price);
      }
      if (sortType === "discountPriceHighToLow") {
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      }
      return 0;
    });

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return (
    <div style={{
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      {error}
    </div>
  );

  return (
    <div className="Container">
      <div className={styles.allProductsPage}>
        <Breadcrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'All products', isActive: true }
          ]}
        />
        <div className={styles.categoriesPageTitle}>
          <h2>All products</h2>
        </div>
        <div className={styles.filterContainer}>
          <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
          <DiscountedItems searchParams={searchParams} setSearchParams={setSearchParams} />
          <div className={styles.selectSort}>
            <span className={styles.sortTitle}>Sorted</span>
            <SelectSort sortType={sortType} setSortType={setSortType} searchParams={searchParams} setSearchParams={setSearchParams} />
          </div>
        </div>
        <div className={styles.productsContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProductsPage;



// import { useSearchParams, Link } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// import Button from "../../../components/Button/Button";
// import { addToCart } from "../../../redux/cartSlice";

// export default function AllProductsPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     const newSearchParams = new URLSearchParams(searchParams);
//     newSearchParams.set(name, type === "checkbox" ? checked : value);
//     setSearchParams(newSearchParams);
//   }

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3333/products/all");
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const minPrice = searchParams.get("minPrice");
//     const maxPrice = searchParams.get("maxPrice");

//     if (minPrice && product.price < Number(minPrice)) {
//       return false;
//     }
//     if (maxPrice && product.price > Number(maxPrice)) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <div>
//       <p>All Products Page</p>

//       <label>
//         Min price
//         <input
//           name="minPrice"
//           type="number"
//           value={searchParams.get("minPrice") || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Max price
//         <input
//           name="maxPrice"
//           type="number"
//           value={searchParams.get("maxPrice") || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Include discount
//         <input
//           name="includeDiscount"
//           type="checkbox"
//           onChange={handleChange}
//           checked={searchParams.get("includeDiscount") === "true"}
//         />
//       </label>
//       <label>
//         Sort type
//         <select
//           name="sortType"
//           value={searchParams.get("sortType") || "default"}
//           onChange={handleChange}
//         >
//           <option value="default">by default</option>
//           <option value="newest">newest</option>
//           <option value="priceHighToLow">price: high-low</option>
//           <option value="priceLowToHigh">price: low-high</option>
//         </select>
//       </label>
//         {/* <ProductContainer products={filteredProducts} /> */}
//        <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       >
//         {filteredProducts.map((product) => {
//           const realPrice = product.discont_price || product.price;
//           const oldPrice = product.discont_price ? product.price : null;
//           return (
//             <Link
//               to={`/products/${product.id}`}
//               key={product.id}
//               style={{
//                 maxWidth: "200px",
//                 textDecoration: "none",
//                 border: "1px solid black",
//               }}
//             >
//               <div>
//                 <p>ID: {product.id}</p>
//                 <p>TITLE: {product.title}</p>
//                 <p>PRICE: {realPrice}</p>
//                 {oldPrice && <p>OLD PRICE: {oldPrice}</p>}
//                 <Button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     dispatch(addToCart(product));
//                   }}
//                 >
//                   Add to cart
//                 </Button>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


