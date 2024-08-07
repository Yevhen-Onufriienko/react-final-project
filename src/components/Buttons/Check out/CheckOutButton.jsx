import React from "react";
import styles from "./CheckOutButton.module.css";
import { Link } from 'react-router-dom';

const CheckOutButton = () => {
    return (
        <Link to="/discounted-products"
        className={styles.button}>Check out
        </Link>
    )
}

export default CheckOutButton;