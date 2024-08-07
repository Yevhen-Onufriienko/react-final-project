// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import { API_URL } from "../../api";

// export default function CategoriesPage() {
//   const categories = useSelector((state) => state.data.categories);

//   return (
//     <div>
//       <p>Categories Page</p>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             <Link to={`/categories/${category.id}`}>
//               <img src={API_URL + category.image} alt={category.title} />
//               <span>{category.title}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from "../Categories/CategoriesPage.module.css";

import API_URL from '../../api';

const CategoriesBlock = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories/all`);
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("An error occurred fetching data. Please try again later.");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="Container">
      <div className={styles.categoriesPage}>

        <Breadcrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'Categories', isActive: true }
          ]}
        />

        <div className={styles.categoriesPageTitle}>
          <h2>Categories</h2>
        </div>

        <ul className={styles.gridCategoriesContainer}>
          {categories.slice(0, 8).map((category) => (
            <li key={category.id} className={styles.gridCategoriesItem}>
              <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
                <img src={`${API_URL}${category.image}`} alt={category.title} className={styles.categoryImage} />
                <h3 className={styles.categoryName}>
                  {category.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default CategoriesBlock;
