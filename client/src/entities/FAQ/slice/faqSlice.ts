import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FAQState, Faq } from '../model/faqTypes';
import {
  fetchFaqs,
  createFaq,
  getFaqById,
  updateFaq,
  deleteFaq,
} from '../api/faqThunkApi';
import { FAQThunkStatus } from '../../../shared/enums/faqThunkTypes';

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
    setSelectedFAQ(state, action: PayloadAction<Faq>) {
      state.selectedFAQ = action.payload;
    },
    clearSelectedFAQ(state) {
      state.selectedFAQ = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<Faq[]>) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        state.data = action.payload || [];
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string ?? 'Failed to fetch FAQs';
      })
      .addCase(createFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(createFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        if (action.payload) {
          state.data.push(action.payload);
        }
      })
      .addCase(createFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string ?? 'Failed to create FAQ';
      })
      .addCase(getFaqById.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(getFaqById.fulfilled, (state, action: PayloadAction<Faq>) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        if (action.payload) {
          state.selectedFAQ = action.payload;
        }
      })
      .addCase(getFaqById.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string ?? 'Failed to get FAQ by id';
      })
      .addCase(updateFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(updateFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        if (action.payload) {
          const idx = state.data.findIndex((faq) => faq.id === action.payload.id);
          if (idx !== -1) {
            state.data[idx] = action.payload;
          }
        }
      })
      .addCase(updateFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string ?? 'Failed to update FAQ';
      })
      .addCase(deleteFaq.pending, (state) => {
        state.status = FAQThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(deleteFaq.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = FAQThunkStatus.SUCCEEDED;
        state.data = state.data.filter((faq) => faq.id !== action.payload);
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.status = FAQThunkStatus.FAILED;
        state.error = action.payload as string ?? 'Failed to delete FAQ';
      });
  },
});

export const { actions: faqActions } = faqSlice;
export const faqReducer = faqSlice.reducer;