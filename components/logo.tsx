import styles from "./logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.flex}>
      <div>
        <Image src="/logo-1.png" width="60px" height="60px" alt="Logo ITB" />
      </div>
    </div>
  );
};

export default Logo;
