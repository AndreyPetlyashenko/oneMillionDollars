import { QuizState } from "@/store";
import { useSelector } from "react-redux";

const useGameStatus = () => {
  const gamePosition = useSelector((state: QuizState) => state.gamePosition);
  const earnedMoney = useSelector((state: QuizState) => state.snatch);
  const isGameOver = useSelector((state: QuizState) => state.isGameOver);

  return { gamePosition, earnedMoney, isGameOver };
};
export default useGameStatus;
