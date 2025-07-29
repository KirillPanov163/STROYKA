import { createSlice } from '@reduxjs/toolkit';
import {
  createService,
  getAllServices,
  getOneService,
  updateService,
  deleteService,
  uploadServiceImage,
  deleteServiceImage,
} from '../api/serviceThunkApi';
import { ServiceState } from '../model/serviceTypes';

const initialState: ServiceState = {
  services: [],
  currentService: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    clearCurrentService: (state) => {
      state.currentService = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.services.push(action.payload);
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Get All
      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Get One
      .addCase(getOneService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneService.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
      })
      .addCase(getOneService.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Update
      .addCase(updateService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
      })
      .addCase(updateService.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Delete
      .addCase(deleteService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter(
          (service) => service.id !== action.payload.id,
        );
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Upload Image
      .addCase(uploadServiceImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadServiceImage.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
      })
      .addCase(uploadServiceImage.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      })

      // Delete Image
      .addCase(deleteServiceImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteServiceImage.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
      })
      .addCase(deleteServiceImage.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as { message: string }).message || 'Ошибка при создании работы';
      });
  },
});

export const { clearCurrentService } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;
