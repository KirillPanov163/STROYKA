import { createSlice } from '@reduxjs/toolkit';
import { FAQState, Faq } from '../model/faqTypes';
import {
  fetchFaqs,
  createFaq,
  getFaqById,
  updateFaq,
  deleteFaq,
} from '../api/faqThunkApi';
import { FAQThunkStatus } from '../../../shared/enums/FAQThunkTypes';

const initialState: FAQState = {
  data: [],
  status: FAQThunkStatus.IDLE,
  error: null,
  selectedFAQ: null,
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setSelectedFAQ(state, action) {
      state.selectedFAQ = action.payload;
    },
    clearSelectedFAQ(state) {
      state.selectedFAQ = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchFaqs
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
      })
      // createFaq
      .addCase(createFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        state.data.push(action.payload);
      })
      .addCase(createFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string;
      })
      // getFaqById
      .addCase(getFaqById.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(getFaqById.fulfilled, (state, action) => {
        state.status = FAQThunkStatus.SUCCEEDED;
      })
      .addCase(getFaqById.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string;
      })
      // updateFaq
      .addCase(updateFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(updateFaq.fulfilled, (state, action) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        const idx = state.data.findIndex((faq) => faq.id === action.payload.id);
        if (idx !== -1) {
          state.data[idx] = action.payload;
        }
      })
      .addCase(updateFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string;
      })
      // deleteFaq
      .addCase(deleteFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteFaq.fulfilled, (state, action) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        state.data = state.data.filter((faq) => faq.id !== action.payload);
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string;
      });
  },
});

export default faqSlice.reducer;
