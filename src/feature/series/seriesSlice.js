import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

const seriesInitialState = {
    loading: false,
    series: [],
    error: ''
}

const fetchSeries = createAsyncThunk('series/fetchSeries', async (name) => {
    return (await (movieApi.get(`?s=${name}&type=${'series'}&apikey=${APIKEY}`))).data
})

const seriesSlice = createSlice({
    name: "series",
    initialState: seriesInitialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchSeries.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchSeries.fulfilled, (state, action) => {
            state.loading = false;
            state.series = action.payload
        })
        builder.addCase(fetchSeries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.stack
        })
    }
})

export default seriesSlice.reducer;
export const seriesFetch = fetchSeries