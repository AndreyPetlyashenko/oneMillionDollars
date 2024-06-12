export const isGameContinue = (isGameOver: boolean, round: number) => {
  return isGameOver || round === -1 ? false : true;
};
