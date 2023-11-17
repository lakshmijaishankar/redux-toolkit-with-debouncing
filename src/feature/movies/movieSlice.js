import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';

const initialState = {
    loading: false,
    movies: [],
    error: '',
    movieDetails: {}
}

const fecthMovies = createAsyncThunk('movie/fecthMovies', async () => {
    return (await movieApi.get(`?s=${'spider man'}&type=${'movie'}&apikey=${APIKEY}`)).data
    // return await movieApi.get('https://dummyjson.com/products')
})
const fetchMovieDetails = createAsyncThunk('movie/fetchMovieDetails', async (imdbId) => {
    return (await movieApi.get(`?i=${imdbId}&type=movie&apikey=${APIKEY}`)).data
})
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fecthMovies.pending, state => {
            state.loading = true
        });
        builder.addCase(fecthMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.error = ''
        })
        builder.addCase(fecthMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error.stack
        })
        builder.addCase(fetchMovieDetails.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.movieDetails = action.payload
        })
        builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.stack
        })
    },
})

export default movieSlice.reducer;
export const fetcMovies = fecthMovies;
export const movieDetails = fetchMovieDetails;
export const { addMovies } = movieSlice.actions;