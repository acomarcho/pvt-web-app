import React from "react";
import styles from "./button.module.css";

const Button = (props: {
  text: string;
  onClick: (e: React.SyntheticEvent) => void;
  marginTop?: string;
}) => {
  return (
    <button
      className={styles.button}
      style={props.marginTop ? { marginTop: props.marginTop } : {}}
      onClick={(e) => {
        props.onClick(e);
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
