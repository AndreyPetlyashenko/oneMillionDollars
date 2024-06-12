import store, { resetGame } from "@/store";

export const useReset = () => ({
  resetGame: () => store.dispatch(resetGame()),
});
