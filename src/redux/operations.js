import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'servises/api';

export const fetchBaseCurrency = createAsyncThunk('fetch/baseCurrency', async (crd, thunkAPI) => {
  const state = thunkAPI.getState();
  const baseCurency = state.currency.baseCurency;
  if (baseCurency) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    const data = await getUserInfo(crd);
    return data.results[0].annotations.currency.iso_code;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
