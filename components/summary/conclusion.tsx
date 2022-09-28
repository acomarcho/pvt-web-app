import { useEffect, useState } from "react";
import { getFastest10RT, getMedianRT } from "../../utils/statistics";
import styles from "./conclusion.module.css";

const Conclusion = () => {
  const [isFailed, setIsFailed] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("listReaksi")) {
      const reactions: number[] = JSON.parse(
        localStorage.getItem("listReaksi")!
      );
      if (getFastest10RT(reactions) >= 300 || getMedianRT(reactions) >= 365) {
        setIsFailed(true);
      } else {
        setIsFailed(false);
      }
    }
  }, []);

  return (
    <div className={styles.conclusionContainer}>
      {isFailed && (
        <div className={styles.conclusionBoxOrange}>
          Stop! Mohon konsultasi dengan paramedis.
        </div>
      )}
      {!isFailed && (
        <div className={styles.conclusionBoxMint}>Selamat bekerja dan tetap waspada.</div>
      )}
    </div>
  );
};

export default Conclusion;
