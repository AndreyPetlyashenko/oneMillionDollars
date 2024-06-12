import styles from "./styles.module.css";
import { FC } from "react";
import { Props } from "./types";

const Question: FC<Props> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
export default Question;
