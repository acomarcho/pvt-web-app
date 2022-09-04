import styles from "./legend.module.css";

const Legend = () => {
  return (
    <div className={styles.legendContainer}>
      <h2>Keterangan indikator</h2>
      <div className={styles.legendContent}>
        <div className={styles.green}></div>
        <p>Kondisi OK</p>
      </div>
      <div className={styles.legendContent}>
        <div className={styles.yellow}></div>
        <p>Konsultasi dengan supervisor</p>
      </div>
      <div className={styles.legendContent}>
        <div className={styles.red}></div>
        <p>Tidak disarankan bekerja</p>
      </div>
    </div>
  );
};

export default Legend;
