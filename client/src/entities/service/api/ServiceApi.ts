import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ServiceApiType } from "../model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";
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

