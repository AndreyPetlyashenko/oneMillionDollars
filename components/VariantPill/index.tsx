import { FC } from "react";
import { Props } from "./types";
import styles from "./styles.module.css";
import { getStatus, warmIntrigue } from "./utils";
import { useGameFlow } from "@/hooks/useGameFlow";

export const VariantPill: FC<Props> = ({
  variant,
  isCorrect,
  money,
  varLetter,
}) => {
  const { setPending, setResult, result, pending } = useGameFlow(money);
  const checkAnswer = async () => {
    await warmIntrigue(2000, isCorrect, setPending, setResult);
  };
  //TO-DO rewrite with enum color value as a status, remove getStatus()
  const status = getStatus(result, pending, isCorrect);

  return (
    <div className={styles.pillContainer} onClick={checkAnswer}>
      <div className={styles.appendix}></div>
      <div className={styles.fullWidth}>
        <div className={styles.content}>
          <span className={styles.varLetter}>{varLetter}</span>
          <span>{variant}</span>
        </div>
        <svg
          width='288'
          height='56'
          viewBox='0 0 288 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className={styles.pill}
        >
          <path
            d='M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z'
            fill={status}
            stroke='#D0D0D8'
            className={styles.hoverEffect}
          />
        </svg>
      </div>
      <div className={styles.appendix}></div>
    </div>
  );
};
