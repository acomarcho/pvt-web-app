import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Aplikasi Test Kelelahan</h1>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Header;
