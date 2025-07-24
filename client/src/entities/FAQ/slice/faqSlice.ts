import { createSlice } from '@reduxjs/toolkit';
import { FAQState } from '../model/faqTypes';
import { fetchFaqs } from '../api/faqThunkApi';
import { FAQThunkStatus } from '../../../shared/enums/FAQThunkTypes';

const initialState: FAQState = {
  data: [],
  status: FAQThunkStatus.IDLE,
  error: null,
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string;
      });
  },
});

export default faqSlice.reducer;
