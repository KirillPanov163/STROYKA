import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createService,
  getAllServices,
  getServiceById,
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
  imageLoading: false,
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
      .addCase(createService.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services.push(payload);
      })

      // Get All
      .addCase(getAllServices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = payload;
      })

      // Get By Id
      .addCase(getServiceById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentService = payload;
      })

      // Update
      .addCase(updateService.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = state.services.map(service => 
          service.id === payload.id ? payload : service
        );
        state.currentService = payload;
      })

      // Delete
      .addCase(deleteService.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = state.services.filter(
          (service) => service.id !== payload.id
        );
        if (state.currentService?.id === payload.id) {
          state.currentService = null;
        }
      })

      // Upload Image
      .addCase(uploadServiceImage.pending, (state) => {
        state.imageLoading = true;
      })
      .addCase(uploadServiceImage.fulfilled, (state, { payload }) => {
        state.imageLoading = false;
        state.currentService = payload;
        state.services = state.services.map(service => 
          service.id === payload.id ? payload : service
        );
      })
      .addCase(uploadServiceImage.rejected, (state) => {
        state.imageLoading = false;
      })

      // Delete Image
      .addCase(deleteServiceImage.pending, (state) => {
        state.imageLoading = true;
      })
      .addCase(deleteServiceImage.fulfilled, (state, { payload }) => {
        state.imageLoading = false;
        state.currentService = payload;
        state.services = state.services.map(service => 
          service.id === payload.id ? payload : service
        );
      })
      .addCase(deleteServiceImage.rejected, (state) => {
        state.imageLoading = false;
      });

    // Общие обработчики для всех pending/rejected случаев
    builder
      .addMatcher(
        isAnyOf(
          createService.pending,
          getAllServices.pending,
          getServiceById.pending,
          updateService.pending,
          deleteService.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          createService.rejected,
          getAllServices.rejected,
          getServiceById.rejected,
          updateService.rejected,
          deleteService.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = (payload as { message: string })?.message || 'Произошла ошибка';
        }
      );
  },
});

export const { clearCurrentService } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;