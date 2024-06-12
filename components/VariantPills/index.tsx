import { FC } from "react";
import { VariantPill } from "../VariantPill";
import styles from "./styles.module.css";
import { Props } from "./types";

const checkIfCorrect = (answer: number | number[], index: number): boolean => {
  if (typeof answer === "number") {
    return answer === index ? true : false;
  } else {
    const isFound = answer.find((ans) => ans === index);
    const result = isFound !== undefined ? true : false;
    return result;
  }
};

export const VariantPills: FC<Props> = ({
  roundData: { variants, answer, money },
}) => {
  const varLetters = ["A", "B", "C", "D"];
  return (
    <div className={styles.pillsContainer}>
      {variants.map((variant, index) => (
        <VariantPill
          key={index}
          variant={variant}
          isCorrect={checkIfCorrect(answer, index)}
          money={money}
          varLetter={varLetters[index]}
        />
      ))}
    </div>
  );
};
