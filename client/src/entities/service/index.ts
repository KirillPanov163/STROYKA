import { createSlice } from "@reduxjs/toolkit";
import { initialState, ServiceType } from "./model";
import { createService, deleteService, getAllServices, getOneService, updateService } from "./api/ServiceApi";

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.services = action.payload.data;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка получения услуг';
      })

      .addCase(getOneService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.service = action.payload.data;
      })
      .addCase(getOneService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка получения услуги';
      })

      .addCase(updateService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updated = action.payload.data;
        if (state.services) {
          state.services = state.services.map((item) =>
            item.id === updated.id ? updated : item,
          );
        }
      })
      .addCase(updateService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка обновления услуги';
      })

      .addCase(createService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.services.push(action.payload);
        
      })
      .addCase(createService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка создания услуги';
      })

      .addCase(deleteService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.services = state.services.filter((task) => task.id !== action.payload.data);
        
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка создания услуги';
      });
  },
});

export const { } = serviceSlice.actions;
export default serviceSlice.reducer;