import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ServiceApiType, ServiceType } from "../model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerResponseType } from "@/shared/types";
import { SERVICES_API_URL } from "@/shared/enums/sericeApiRoutes";
import { SERVICES_THUNK_TYPES } from "@/shared/enums/serviceThunkTypes";
import { AxiosError } from "axios";

export const getAllServices = createAsyncThunk<
  ServiceApiType,
  void,
  { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.GET_ALL_SERVICES,
    async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.
      get<ServerResponseType<ServiceApiType>>(SERVICES_API_URL.GET_ALL_SERVICES);
    return response.data.data;
  } catch (error) {
      const err = error as AxiosError<ServerResponseType<null>>;
      console.error('getAllServices error:', err.response?.data);
      return rejectWithValue(
        err.response?.data || {
          statusCode: 500,
          message: 'Ошибка получения услуг',
          data: null,
          error: err.message || 'Unknown error',
        },
    );
  }
});

  export const getOneService = createAsyncThunk<
    ServiceApiType,
    string,
    { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.GET_ONE_SERVICE,
    async (id, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get<ServerResponseType<ServiceApiType>>(`${SERVICES_API_URL.GET_ALL_SERVICES}/${id}`);
        return response.data.data;
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

  export const updateService = createAsyncThunk<
    ServiceType,
    ServiceType,
    { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.UPDATE_SERVICE,
    async (service, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.
          put<ServerResponseType<ServiceType>>
          (`${SERVICES_API_URL.GET_ALL_SERVICES}/${service.id}`, service);
        return response.data.data;
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
    }
  );

  export const createService = createAsyncThunk<
    ServiceType,
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
    void,
    string,
    { rejectValue: ServerResponseType<null> }
  >(SERVICES_THUNK_TYPES.DELETE_SERVICE,
    async (id, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.delete<ServerResponseType<void>>(`${SERVICES_API_URL.GET_ALL_SERVICES}/${id}`);
        return response.data.data;
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