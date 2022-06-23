import { useState, useEffect } from "react";
import styles from "./subheading.module.css";

const Subheading = () => {
  const [reactions, setReactions] = useState<number[]>([]);

  useEffect(() => {
    setReactions(JSON.parse(localStorage.getItem('listReaksi') as string))
  }, []);
    
  return (
    <div className={styles.subheadingContainer}>
      <h1>Waktu habis!</h1>
      <br />
      <p>Dari <span className="blueberry">{reactions.length} kali percobaan</span>, Anda meraih data-data berikut:</p>
    </div>
  );
};

export default Subheading;
