import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
////Auth Routes
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/movieDetails";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";

//Services
import { MovieProvider } from "./Data/movieController";
import { getUser, getToken } from "./AuthService/userService";

const App = () => {
  const [state, setState] = useState({ genre: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      (async () => {
        try {
          const { data } = await getUser();
          setUser(data);
        } catch (error) {
          console.log(error.response);
        }
      })();
    }
  }, []);

  return (
    <MovieProvider>
      <Layout user={user} setState={setState}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home genre={state.genre} />
            </Route>

            <Route
              exact
              path="/signup"
              render={(props) => {
                if (user) return <Redirect to="/" />;
                return <SignUp {...props} />;
              }}
            />

            <Route
              exact
              path="/login"
              render={(props) => {
                if (user) return <Redirect to="/" />;
                return <Login {...props} />;
              }}
            />

            <Route
              exact
              path="/dashboard"
              render={(props) => {
                if (user && user.role === "user") return <Redirect to="/" />;
                return <Dashboard {...props} />;
              }}
            />

            <Route exact path="/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </MovieProvider>
  );
};

export default App;
