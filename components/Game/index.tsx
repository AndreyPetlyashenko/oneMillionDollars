import { getQuizData } from "@/api";
import useGameStatus from "@/hooks/useGameStatus";
import { QuizBlock } from "@/store/types";
import { getPrizes, HighPrizesFirst, navigateTo } from "@/utils";
import { VariantPills } from "../VariantPills";
import Prizes from "../Prizes";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Question from "../Question";
import { Burger } from "../Burger";
import { useState } from "react";
import cx from "classnames";
import { Cross } from "../Cross";
import { isGameContinue } from "./utils";

const Game = () => {
  const { gamePosition, earnedMoney, isGameOver } = useGameStatus();

  const [togglePrizes, setTogglePrizes] = useState<boolean>(false);
  const toggler = () => {
    setTogglePrizes(!togglePrizes);
  };

  const data = getQuizData(); // fetch the data
  const sortedQuizData: QuizBlock[] = data.sort(HighPrizesFirst);
  const prizes = getPrizes(sortedQuizData);
  const round = sortedQuizData.length - gamePosition - 1; // start from the bottom of question list

  const router = useRouter();

  if (!isGameContinue(isGameOver, round)) {
    navigateTo("finish", router);
    return null;
  }

  const roundData = sortedQuizData[round];

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.quizSide}>
        <Question title={roundData.question} />
        <VariantPills roundData={roundData} />
      </div>
      <div className={styles.burger}>
        <Burger onClick={toggler} />
      </div>
      <div className={cx(styles.prizesSide, { [styles.toggle]: togglePrizes })}>
        <Prizes prizes={prizes} round={round} earnedMoney={earnedMoney} />
        <Cross onClick={toggler} />
      </div>
    </div>
  );
};
export default Game;
