import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(null);

  const url = "http://localhost:5000/api/movie";

  const Movies = async () => {
    try {
      const { data } = await axios.get(url);
      setMovies(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    Movies();
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
