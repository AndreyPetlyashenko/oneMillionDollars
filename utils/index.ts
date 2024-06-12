import { QuizBlock } from "@/store/types";
import { NextRouter } from "next/router";

export const HighPrizesFirst = (a: QuizBlock, b: QuizBlock) =>
  b.money - a.money;

export const getPrizes = (data: QuizBlock[]) =>
  data.map((block) => block.money);

export const navigateTo = (route: string, router: NextRouter) =>
  router.push(route);
