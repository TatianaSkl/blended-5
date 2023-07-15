import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurency: '' },
  reducers: {
    setBaseCurency(state, action) {
      state.baseCurency = action.payload;
    },
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurency = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurency } = currencySlice.actions;
