import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import type { ServerResponseType } from '@/shared/types';
import { IMetaData } from '../model/metaDataTypes';
import { METADATA_TYPES } from '@/shared/enums/metaDataThunkTypes';
import { METADATA_API_ROUTES } from '@/shared/enums/metaDataApiRoutes';

export const getAllMetaData = createAsyncThunk<
  ServerResponseType<IMetaData[]>,
  void,
  { rejectValue: ServerResponseType<null> }
>(METADATA_TYPES.ALL_METADATA, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<ServerResponseType<IMetaData[]>>(
      METADATA_API_ROUTES.METADATA,
    );
    return data;
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
});

export const getOneMetaData = createAsyncThunk<
  ServerResponseType<IMetaData>,
  string,
  { rejectValue: ServerResponseType<null> }
>(METADATA_TYPES.ONE_METADATA, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<ServerResponseType<IMetaData>>(
      `${METADATA_API_ROUTES.METADATA}/${id}`,
    );
    return data;
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
});

export const updateMetaData = createAsyncThunk<
  ServerResponseType<IMetaData>,
  IMetaData,
  { rejectValue: ServerResponseType<null> }
>(METADATA_TYPES.UPDATE_METADATA, async (updatedData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.put<ServerResponseType<IMetaData>>(
      `${METADATA_API_ROUTES.METADATA}/${updatedData.id}`, updatedData
    );
    return data;
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
});
