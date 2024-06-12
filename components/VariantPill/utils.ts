export const warmIntrigue = async (
  delay: number,
  isCorrect: boolean,
  setPending: (value: boolean) => void,
  setResult: (value: boolean) => void
) => {
  setPending(true);
  await setTimeout(() => {
    setPending(false);
    setResult(isCorrect);
  }, delay);
};
//TO DO - colors in Separate file! css variables
export const getStatus = (
  result: boolean | undefined,
  pending: boolean | undefined,
  isCorrect: boolean
) => {
  if (result !== undefined) {
    return isCorrect ? "#47D867" : "#EC6259";
  }
  if (pending) {
    return "#E87928";
  }
  return "white";
};
