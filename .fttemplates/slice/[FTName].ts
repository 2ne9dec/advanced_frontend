import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { [FTName] } from '../types/[FTName | lowercase]';
import { [FTName]Schema } from '../types/[FTName]Schema';

const initialState: [FTName]Schema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const [FTName | camelcase]Slice = createSlice({
  name: '[FTName | camelcase]',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch[FTName].pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetch[FTName].fulfilled, (state, action: PayloadAction<[FTName]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetch[FTName].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: [FTName | camelcase]Actions } = [FTName | camelcase]Slice;
export const { reducer: [FTName | camelcase]Reducer } = [FTName | camelcase]Slice;