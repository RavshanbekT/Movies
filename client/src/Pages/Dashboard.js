import React, { useEffect, useState } from "react";
import Select from "../Components/common/select";
import Movies from "../Components/Movies";
import { userOptions, movieOptions } from "../Data/SelectOptions";
import { getAllMovie } from "../AuthService/movieService";
const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const SelectHandler = () => {};

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllMovie();
        console.log(data.data);
        setMovies(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar__nav-wrapper">
          <div className="dashboard-sidebar__nav-wrapper--headline">
            Features
          </div>
          <div className="navbar--item navbar--select-primary">
            <Select
              label="Movie"
              onSelect={SelectHandler}
              name="movie"
              options={movieOptions}
            />
          </div>

          <div className="navbar--item navbar--select-primary margin-top">
            <Select
              label="User"
              onSelect={SelectHandler}
              name="user"
              options={userOptions}
            />
          </div>
        </div>
      </div>
      <div className="dashboard-contentbar">
        <Movies loading={loading} movies={movies} />
      </div>
    </div>
  );
};

export default Dashboard;
