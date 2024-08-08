import { useDispatch, useSelector } from "react-redux";
import { openAndCloseModal } from "../../redux/modalSlice";
import Title from "../../components/Title/Title";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Hero from "../../components/HeroBaner/Hero";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import DiscountForm from "../../components/DiscountForm/DiscountForm"

export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.data.products);

  const discontProducts = allProducts.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div>
      <Hero />
      <CategoriesContainer />
      <DiscountForm />
      <ProductContainer />
    </div>
  );
}
