
import { RecordingFormData } from "@/features/recordingForm/RecordingForm";
import { RECORDINGFORM_API_URLS, RECORDINGFORM_THUNK_TYPES } from "@/shared/enums/RecordingFormRoutes";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ServerResponseType } from "@/shared/types";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendRecordingThunk = createAsyncThunk<
  ServerResponseType<null>,
  RecordingFormData,
  { rejectValue: ServerResponseType<null> }
>(RECORDINGFORM_THUNK_TYPES.RECORDINGFORM, async (recordingFormData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<
      ServerResponseType<null>
    >(RECORDINGFORM_API_URLS.RECORDINGFORM, recordingFormData);

    
    return response.data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

//