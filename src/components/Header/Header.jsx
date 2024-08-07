import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon.svg"

function calculateNumberOfProductsInCart(cart) {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;
  });
  return totalQuantity;
}

export default function Header() {
  const loadingRef = useRef(null);
  const isLoading = useSelector((state) => state.data.isLoading);
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = calculateNumberOfProductsInCart(cart);

  useEffect(() => {

  if (loadingRef.current) {
    if (isLoading) {
      loadingRef.current.continuousStart();
    } else {
      loadingRef.current.complete();
    }
    }
     }, [isLoading]);

  return (
    <header className={styles.Header}>
      <LoadingBar color="#0D50FF" ref={loadingRef} />
      <Link className={styles.header_logo} to="/"><img src={logo} alt="logo" />
      </Link>
      <nav >
        <ul className={styles.header_nav}>
          <li>
            <Link  className={styles.header_link} to="/">Main Page</Link>
          </li>
          <li>
            <Link  className={styles.header_link} to="/categories">Categories</Link>
          </li>
          <li>
            <Link  className={styles.header_link} to="/products">All Products</Link>
          </li>
          <li>
            <Link  className={styles.header_link} to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </nav>
      <Link className={styles.header_icon} to="/cart">
        <img src={icon} alt="icon" />
        <span className={styles.cartBadge}>
          {totalQuantity}
        </span>
      </Link>
    </header>
  );
}



/*import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import styles from "./Header.module.css";

function calculateNumberOfProductsInCart(cart) {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;
  });
  return totalQuantity;
}

export default function Header() {
  const burgerRef = useRef(null);
  const cart = useSelector((state) => state.cart.items);
  const location = useLocation();

  const totalQuantity = calculateNumberOfProductsInCart(cart);

  useEffect(() => {
    burgerRef.current.checked = false;
  }, [location]);

  return (
    <header className={styles.Header}>
      <Link to="/">Logo</Link>
      <nav>
        <ul className={styles.HeaderNav}>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.RightSection}>
        <Link to="/cart">Cart ({totalQuantity})</Link>
        <input
          ref={burgerRef}
          className={styles.BurgerCheckbox}
          type="checkbox"
          id="mobile-menu"
        />
        <label htmlFor="mobile-menu" className={styles.BurgerIcon}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </label>
        <ul className={styles.MobileMenu}>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </div>
    </header>
  );
} */
