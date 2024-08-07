import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { API_URL } from "../../api";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.data.categories);

  return (
    <div>
      <p>Categories Page</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <img src={API_URL + category.image} alt={category.title} />
              <span>{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
