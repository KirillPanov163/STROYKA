import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import { ServerResponseType } from '@/shared/types';
import { Service } from '../model/serviceTypes';
import { AxiosError } from 'axios';

export const createService = createAsyncThunk(
  'service/create',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<ServerResponseType<Service>>(
        '/service',
        formData,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const getAllServices = createAsyncThunk(
  'service/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<ServerResponseType<Service[]>>('/service');
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const getOneService = createAsyncThunk(
  'service/getOne',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<ServerResponseType<Service>>(
        `/service/${id}`,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const deleteService = createAsyncThunk(
  'service/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete<ServerResponseType<Service>>(
        `/service/${id}`,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const getServiceById = createAsyncThunk(
  'service/getById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<ServerResponseType<Service>>(
        `/service/${id}`,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const updateService = createAsyncThunk(
  'service/update',
  async ({ id, formData }: { id: number; formData: FormData }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put<ServerResponseType<Service>>(
        `/service/${id}`,
        formData,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const deleteAllServices = createAsyncThunk(
  'service/deleteAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete<ServerResponseType<Service[]>>(
        '/service',
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const uploadServiceImage = createAsyncThunk(
  'service/uploadImage',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<ServerResponseType<Service>>(
        '/service/upload-image',
        formData,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

export const deleteServiceImage = createAsyncThunk(
  'service/deleteImage',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete<ServerResponseType<Service>>(
        `/service/delete-image/${id}`,
      );
      return data.data;
    } catch (error: AxiosError | any) {
      return rejectWithValue(
        error.response?.data || { message: 'Ошибка при создании услуги' },
      );
    }
  },
);

// Аналогично для остальных операций
