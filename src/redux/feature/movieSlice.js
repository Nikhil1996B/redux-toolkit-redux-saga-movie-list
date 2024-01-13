import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    movie: {},
  },
  reducers: {
    getMovies: (name) => {
      return name;
    },
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { getMovies, setMovies } = movieSlice.actions;
export default movieSlice.reducer;
