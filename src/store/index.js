import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stationFetchReducer from './stationsSlice';

const store = configureStore({
  reducer: combineReducers({
    stations: stationFetchReducer,
  }),
});

export default store;
