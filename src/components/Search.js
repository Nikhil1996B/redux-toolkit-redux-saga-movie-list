import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";

const Search = () => {
  const [movieName, setMovieName] = useState("spider");
  const {movieList: {Error: error}} = useSelector(())
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(movieName));
  }, [movieName]);

  return (
    <>
      <Box
        as="h2"
        sx={{
          letterSpacing: "0.1rem",
          lineHeight: "1.25",
          marginBottom: "0.25rem",
          fontSize: "2rem",
        }}
      >
        Movie Search App
      </Box>
      <Box
        as="form"
        className={{
          width: "90vw",
          maxWidth: "1170px",
          margin: "0 auto",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          type="text"
          fullWidth
          value={movieName}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setMovieName(e.target.value)}
        />
        {error}
      </Box>
    </>
  );
};

export default Search;
