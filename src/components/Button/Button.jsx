import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const Button = ({ children, onClick, isActive, isLink, to }) => {
  if (isLink) {
    return (
      <Link
        to={to}
        className={
          isActive ? `${styles.Button} ${styles.Active}` : styles.Button
        }
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={isActive ? `${styles.Button} ${styles.Active}` : styles.Button}
      onClick={onClick}
    >
      {isActive ? "I'm active!" : children}
    </button>
  );
};

export default Button;
