import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movies/movieSlice';
import seriesSlice from './series/seriesSlice';

export const store = configureStore({
    reducer: {
        movieReducer: movieSlice,
        seriesReducer: seriesSlice
    }
})