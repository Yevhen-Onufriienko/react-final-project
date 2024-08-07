import styles from "./Title.module.css";

export default function Title({ children, tag, className, style }) {
  if (tag === "h1") {
    return (
      <h1 style={style} className={`${styles.TitleCommon} ${className}`}>
        {children}
      </h1>
    );
  }
  if (tag === "h2") {
    return (
      <h2
        style={style}
        className={`${styles.TitleCommon} ${styles.H2} ${className}`}
      >
        {children}
      </h2>
    );
  }
  if (tag === "h3") {
    return (
      <h3 style={style} className={`${styles.TitleCommon} ${className}`}>
        {children}
      </h3>
    );
  }

  return null;
}
