import { AxiosError } from "axios";
import { defaultRejectedAxiosError } from "../consts";
import { ServerResponseType } from "../types";

export function handleAxiosError(error: unknown): ServerResponseType<null> {
  if (error instanceof AxiosError) {
    if (error.code === 'ERR_CANCELED') {
      return {
        ...defaultRejectedAxiosError,
        error: 'Жаль, но Время ожидания ответа истекло. Повторите попытку позже.',
      };
    }

    if (error.code === 'ERR_NETWORK') {
      return {
        ...defaultRejectedAxiosError,
        error: 'Жаль, но Не удалось подключиться к серверу. Повторите попытку позже.',
      };
    }

    if (error.response) {
      return error.response.data;
    }
  }

  return defaultRejectedAxiosError;
}