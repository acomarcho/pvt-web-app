import { useState, useEffect } from "react";
import styles from "./subheading.module.css";

const Subheading = () => {
  const [reactions, setReactions] = useState<number[]>([]);

  useEffect(() => {
    setReactions(JSON.parse(localStorage.getItem('listReaksi') as string))
  }, []);
    
  return (
    <div className={styles.subheadingContainer}>
      <h1>Sesi latihan selesai!</h1>
    </div>
  );
};

export default Subheading;
