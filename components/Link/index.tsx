import Link from "next/link";
import styles from "./styles.module.css";
import { FC } from "react";
import { Props } from "./types";

const Button: FC<Props> = ({ href, title, onClick }) => {
  return (
    <Link href={href} className={styles.wideButton}>
      <div className={styles.button} onClick={onClick}>
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  );
};
export default Button;
