import { useRouter } from "next/router";
import styles from "./buttons.module.css";

const Buttons = (props: {prevLink: string, nextLink: string}) => {
  const router = useRouter();

  const back = () => {
    router.push(props.prevLink);
  }

  const next = () => {
    router.push(props.nextLink)
  }
  
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={back}>Kembali</button>
      <button onClick={next}>Selanjutnya</button>
    </div>
  );
};

export default Buttons;
