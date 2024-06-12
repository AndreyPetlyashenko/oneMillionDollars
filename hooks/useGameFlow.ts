import store, { collectGold, finitaLaComedia, nextRound } from "@/store";
import { useEffect, useState } from "react";

export const useGameFlow = (money: number) => {
  const [pending, setPending] = useState<boolean>();
  const [result, setResult] = useState<boolean>();

  useEffect(() => {
    if (result !== undefined) {
      setTimeout(() => {
        if (result === true) {
          store.dispatch(nextRound());
          store.dispatch(collectGold(money));
          setResult(undefined);
          setPending(undefined);
        } else {
          store.dispatch(finitaLaComedia());
        }
      }, 1000);
    }
  }, [result]);

  return {
    setPending,
    setResult,
    result,
    pending,
  };
};
