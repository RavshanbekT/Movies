import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
//custom Component
import { SearchMovies, GetGenres } from "../AuthService/movieService";
import MoviesComponent from "../Components/Movies";
import Card from "../Components/Card";
import SectionTitle from "../Components/common/SectionTitle";
//image
const Home = ({ genre }) => {
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [toggle, setToggle] = useState({ toggleM: false, toggleS: false });

  let [movies, setMovies] = useState([]);

  ///Searching Movies
  useEffect(() => {
    try {
      (async () => {
        const { data } = await SearchMovies(searchInput);
        setMovies(data.data);
      })();
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  }, [searchInput]);

  ///Getting Genres
  useEffect(() => {
    try {
      (async () => {
        const { data } = await GetGenres(genre);
        setMovies(data.data);
      })();
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  }, [genre]);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="main__search-bar">
        <button
          onClick={() => setToggle({ toggleM: true, toggleS: false })}
          className="btn-primary btn"
        >
          Movies
        </button>
        <button
          onClick={() => setToggle({ toggleM: false, toggleS: true })}
          className="btn-primary btn"
        >
          Series
        </button>
        <div className="search-box">
          <div className="search-box__input-wrapper">
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => onInputChange(e)}
              placeholder="Search a Movie"
              className="search-box--input"
            />
          </div>
          <IconContext.Provider
            value={{ size: "3rem", className: "search-icon" }}
          >
            <FiSearch />
          </IconContext.Provider>
        </div>
      </div>

      {toggle.toggleM && <MoviesComponent loading={loading} movies={movies} />}
      {toggle.toggleS && "Series"}
      {!toggle.toggleS && !toggle.toggleM && (
        <>
          <SectionTitle title="Top Rated Movies" />

          <div className="movies-wrapper flex-nowrap">
            {loading
              ? "Wait"
              : movies.map((movie) => {
                  if (movie.rating === 5) {
                    return (
                      <Card
                        key={movie._id}
                        movieId={movie._id}
                        movieTitle={movie.title}
                        movieImgUrl={movie.image}
                        movieRating={movie.rating}
                      />
                    );
                  }
                  return null;
                })}
          </div>

          <SectionTitle title="Popular Movies" />

          <div className="movies-wrapper flex-nowrap">
            {loading
              ? "Wait"
              : movies.map((movie) => {
                  if (movie.rating >= 4) {
                    return (
                      <Card
                        key={movie._id}
                        movieId={movie._id}
                        movieTitle={movie.title}
                        movieImgUrl={movie.image}
                        movieRating={movie.rating}
                      />
                    );
                  }
                  return null;
                })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
