import { createSlice } from '@reduxjs/toolkit';
import {
  createMyWorkThunk,
  getAllMyWorksThunk,
  getMyWorkByIdThunk,
  updateMyWorkThunk,
  deleteMyWorkThunk,
} from '../api/portfolio';
import { initialState } from '../model';

const myWorkSlice = createSlice({
  name: 'myWork',
  initialState,
  reducers: {
    clearCurrentWork: (state) => {
      state.currentWork = null;
    },
  },
  extraReducers: (builder) =>
    builder
      // Create
      .addCase(createMyWorkThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMyWorkThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.works.push(action.payload);
      })
      .addCase(createMyWorkThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? null;
      })
      
      // Get All
      .addCase(getAllMyWorksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMyWorksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.works = action.payload;
      })
      .addCase(getAllMyWorksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? null;
      })
      
      // Get By Id
      .addCase(getMyWorkByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyWorkByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentWork = action.payload;
      })
      .addCase(getMyWorkByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? null;
      })
      
      // Update
      .addCase(updateMyWorkThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateMyWorkThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.works = state.works.map(work => 
          work.id === action.payload.id ? action.payload : work
        );
        if (state.currentWork?.id === action.payload.id) {
          state.currentWork = action.payload;
        }
      })
      .addCase(updateMyWorkThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? null;
      })
      
      // Delete
      .addCase(deleteMyWorkThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteMyWorkThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.works = state.works.filter(work => work.id !== action.payload);
        if (state.currentWork?.id === action.payload) {
          state.currentWork = null;
        }
      })
      .addCase(deleteMyWorkThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? null;
      }),
});

export const { clearCurrentWork } = myWorkSlice.actions;
export const myWorkReducer = myWorkSlice.reducer;