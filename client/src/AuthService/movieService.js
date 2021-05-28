import axios from "axios";
import { getToken } from "./userService";
const url = "http://localhost:5000/api/movie";
const token = getToken();
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

///Get ALL Movie
export const getAllMovie = async () => {
  return await axios.get(`${url}`);
};

///Get Movie
export const getMovie = async (id) => {
  return await axios.get(`${url}/${id}`);
};

///Update Movie
export const updateMovie = async (id, form) => {
  return await axios.patch(`${url}/${id}`, form);
};

///delete Movie
export const deleteMovie = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

///Search Movie
export const SearchMovies = async (i) => {
  if (i !== "") {
    let query = `?title=${i}`;
    return await axios.get(`${url}/${query}`);
  }

  return await axios.get(`${url}`);
};

///Search Genre
export const GetGenres = async (genre) => {
  if (genre !== "") {
    let query = `?genre=${genre}`;
    return await axios.get(`${url}/${query}`);
  }

  return await axios.get(`${url}`);
};

// const options = {
//   params: {
//     tconst: "tt0944947",
//   },
//   headers: {
//     "x-rapidapi-key": "74f49e9bf6msh5724306abb4a7fcp107cd8jsna19c5fd462b9",
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//   },
// };
