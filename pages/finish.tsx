import styles from "./styles.module.css";
import cx from "classnames";
import { Logo } from "@/components/Logo";
import Button from "@/components/Link";
import useGameStatus from "@/hooks/useGameStatus";
import { useReset } from "@/hooks/useReset";

const Finish = () => {
  const { earnedMoney } = useGameStatus();
  const { resetGame } = useReset();

  return (
    <div className={styles.finishContainer}>
      <Logo />
      <div className={styles.content}>
        <div className={styles.titles}>
          <h3 className={styles.totalScore}>Total Score:</h3>
          <h1 className={styles.earnedMoney}>${earnedMoney} earned</h1>
        </div>
        <Button href='/main' title='Play again?' onClick={resetGame} />
      </div>
    </div>
  );
};
export default Finish;
