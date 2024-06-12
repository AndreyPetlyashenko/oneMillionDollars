import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizState {
  gamePosition: number;
  snatch: number;
  isGameOver: boolean;
}

const initialState = {
  gamePosition: 0,
  snatch: 0,
  isGameOver: false,
} satisfies QuizState as QuizState;

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextRound(state) {
      state.gamePosition++;
    },
    finitaLaComedia(state) {
      state.gamePosition = 0;
      state.isGameOver = true;
      //TO-DO func for undying money
    },
    collectGold(state, action: PayloadAction<number>) {
      state.snatch = action.payload;
    },
    resetGame(state) {
      state.gamePosition = 0;
      state.snatch = 0;
      state.isGameOver = false;
    },
  },
});

export const { nextRound, finitaLaComedia, collectGold, resetGame } =
  quizSlice.actions;

const store = configureStore({
  reducer: quizSlice.reducer,
});

export default store;
