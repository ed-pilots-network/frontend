import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../common';

const initialState = {
  stations: [],
  loading: false,
  error: null,
};

export const fetchStationData = createAsyncThunk(
  'stations/fetchStationData',
  async () => {
    const response = await API.get('station');
    return response.data;
  },
);

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStationData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchStationData.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(fetchStationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stationsSlice.reducer;
