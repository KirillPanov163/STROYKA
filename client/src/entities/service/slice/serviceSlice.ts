import { createSlice } from '@reduxjs/toolkit';
import {
  getAllServices,
  createService,
  getOneService,
  updateService,
  deleteService,
} from '../api/serviceThunkApi';
import type { IService } from '../model/serviceTypes';

interface IServiceState {
  services: IService[];
  service: IService;
  isLoading: boolean;
  error: string;
}

const initialState: IServiceState = {
  services: [],
  service: {} as IService,
  isLoading: false,
  error: '',
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Get All
      .addCase(getAllServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload.data;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при получении списка услуг';
      })

      // Create
      .addCase(createService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services.push(action.payload.data);
      })
      .addCase(createService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при создании услуги';
      })

      // Get One
      .addCase(getOneService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.service = action.payload.data;
      })
      .addCase(getOneService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при получении услуги';
      })

      // Update
      .addCase(updateService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = state.services.map((service) => {
          if (service.id === action.payload.data.id) {
            return action.payload.data;
          }
          return service;
        });
      })
      .addCase(updateService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при обновлении услуги';
      })

      // Delete
      .addCase(deleteService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.isLoading = false;

        const deletedId = action.payload?.data;
        if (deletedId) {
          state.services = state.services.filter(
            (service) => service.id && service.id !== deletedId?.id,
          );
        }
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при удалении услуги';
      });
  },
});

export const { actions: servicesActions } = serviceSlice
export const servicesReducer = serviceSlice.reducer