import styles from "./wrapper.module.css";

const Wrapper = (props: { children: JSX.Element }) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
