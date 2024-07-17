import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: [],
  isWaiting: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setIsWaiting: (state, action) => {
      state.isWaiting = action.payload;
    },
  },
});

export const { setResult, setIsWaiting } = gameSlice.actions;
export default gameSlice.reducer;
