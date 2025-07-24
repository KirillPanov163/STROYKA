import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ServiceType } from "../model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerResponseType } from "@/shared/types";
import { SERVICES_API_URL } from "@/shared/enums/sericeApiRoutes";
import { SERVICES_THUNK_TYPES } from "@/shared/enums/serviceThunkTypes";
import { AxiosError } from "axios";

export const getAllServices = createAsyncThunk<
  ServerResponseType<ServiceType[]>,  // тип успешного результата
  void,
  { rejectValue: ServerResponseType<null> }
>(
  SERVICES_THUNK_TYPES.GET_ALL_SERVICES,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .get<ServerResponseType<ServiceType[]>>(SERVICES_API_URL.GET_ALL_SERVICES);
      return response.data; 
    } catch (error) {
      
      const err = error as AxiosError<ServerResponseType<null>>;
      console.error('getOneService error:', err.response?.data);
      return rejectWithValue(
        err.response?.data || {
          statusCode: 500,
          message: 'Ошибка получения услуги',
          data: null,
          error: err.message || 'Unknown error',
        },
      );
    }
  }
);


export const getOneService = createAsyncThunk<
  ServerResponseType<ServiceType>,
  number,
  { rejectValue: ServerResponseType<null> }
>(SERVICES_THUNK_TYPES.GET_ONE_SERVICE, async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ServerResponseType<ServiceType>>(
      `${SERVICES_API_URL.GET_ALL_SERVICES}/${id}`,
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getOneService error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения услуги',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});

export const updateService = createAsyncThunk<
  ServerResponseType<ServiceType>,
  ServiceType,
  { rejectValue: ServerResponseType<null> }
>(SERVICES_THUNK_TYPES.UPDATE_SERVICE, async (service, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put<ServerResponseType<ServiceType>>(
      `${SERVICES_API_URL.GET_ALL_SERVICES}/${service.id}`,
      service,
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('updateService error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка обновления услуги',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});

  export const createService = createAsyncThunk<
    ServiceType,
    { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.CREATE_SERVICE,
    async (service, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.
          post<ServerResponseType<ServiceType>>(SERVICES_API_URL.GET_ALL_SERVICES, service);
        return response.data.data;
      } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
        console.error('createService error:', err.response?.data);
        return rejectWithValue(
          err.response?.data || {
            statusCode: 500,
            message: 'Ошибка создания услуги',
            data: null,
            error: err.message || 'Unknown error',
          },
        );
      }
    }
  );
  
export const deleteService = createAsyncThunk<
    ServerResponseType<null>,
    number,
    { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.DELETE_SERVICE,
    async (id, { rejectWithValue }) => {
      try {
        const response = await axiosInstance
          .delete<ServerResponseType<null>>(`${SERVICES_API_URL.GET_ALL_SERVICES}/${id}`);
        return response.data;
      } catch (error) {
        const err = error as AxiosError<ServerResponseType<null>>;
        console.error('deleteService error:', err.response?.data);
        return rejectWithValue(
          err.response?.data || {
            statusCode: 500,
            message: 'Ошибка удаления услуги',
            data: null,
            error: err.message || 'Unknown error',
          },
        );
      }
    }
  );