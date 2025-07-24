import { createSlice } from '@reduxjs/toolkit';
import { getAllMetaData, getOneMetaData, updateMetaData } from '../api/metaDataThunkApi';
import { IMetaData } from '../model/metaDataTypes';

export type MetaDataType = {
  metaData: IMetaData | null;
  metaDatas: IMetaData[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: MetaDataType = {
  metaData: null,
  metaDatas: [],
  isLoading: false,
  error: null,
};

const metaDataSlice = createSlice({
  name: 'metaData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMetaData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMetaData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.metaDatas = action.payload.data;
      })
      .addCase(getAllMetaData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при получении списка цен';
      })

      .addCase(getOneMetaData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneMetaData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.metaData = action.payload.data;
      })
      .addCase(getOneMetaData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при получении списка цен';
      })

      .addCase(updateMetaData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMetaData.fulfilled, (state, action) => {
        state.isLoading = false;
        const updated = action.payload.data;
        if (state.metaDatas) {
          state.metaDatas = state.metaDatas.map((item) =>
            item.id === updated.id ? updated : item,
          );
        }
      })
      .addCase(updateMetaData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при обновлении цены';
      });
  },
});
