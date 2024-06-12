import { FC } from "react";
import { Props } from "./types";
import styles from "./styles.module.css";
import cx from "classnames";

export const PrizePill: FC<Props> = ({ prize, isCurrentRound, isBeaten }) => {
  const getStatus = () => {
    if (isBeaten) return "#d0d0d8";
    return isCurrentRound ? "#ff8b37" : "#D0D0D8";
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.appendix}></div>
      <div className={styles.content}>
        <span className={cx({ [styles.beaten]: isBeaten })}>${prize}</span>
      </div>
      <svg
        width='240'
        height='32'
        viewBox='0 0 240 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        className={styles.pill}
      >
        <path
          d='M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z'
          fill={"white"}
          stroke={getStatus()}
          className={styles.hoverEffect}
        />
      </svg>
      <div className={styles.appendix}></div>
    </div>
  );
};
