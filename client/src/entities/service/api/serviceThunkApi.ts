import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import type { ServerResponseType } from '@/shared/types';
import type { IService } from '../model/serviceTypes';
import { SERVICE_THUNK_TYPES } from '@/shared/enums/serviceThunkTypes';
import { SERVICE_API_ROUTES } from '@/shared/enums/serviceApiRoutes';

export const getAllServices = createAsyncThunk<
  ServerResponseType<IService[]>,
  void,
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.ALL_SERVICE, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<ServerResponseType<IService[]>>(
      SERVICE_API_ROUTES.SERVICE
    )
    return data
  } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
})

export const getOneService = createAsyncThunk<
  ServerResponseType<IService>,
  number,
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.ONE_SERVICE, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${id}`
    )
    return data
  } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
})

export const updateService = createAsyncThunk<
  ServerResponseType<IService>,
  IService,
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.UPDATE_SERVICE, async (service, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.put<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${service.id}`,
      service
    )
    return data
  } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
})

export const deleteService = createAsyncThunk<
  ServerResponseType<IService>,
  number,
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.DELETE_SERVICE, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${id}`
    )
    return data
  } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
})

export const createService = createAsyncThunk<
  ServerResponseType<IService>,
  IService,
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.CREATE_SERVICE, async (service, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<ServerResponseType<IService>>(
      SERVICE_API_ROUTES.SERVICE,
      service
    )
    return data
  } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
})