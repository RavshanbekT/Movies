import React from "react";

//////////
import Select from "./common/select";
import Logo from "../Assets/SVG/logo.svg";
import AuthItem from "./common/auth-item";
import { SelectOptions, authlink } from "../Data/SelectOptions";
//////////
const Header = ({ setState, user }) => {
  const onSelectSubmit = (selectedGenre) => {
    setState({ genre: selectedGenre });
  };

  return (
    <header>
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" className="logo-wrapper--logo" />
      </div>
      <div className="navbar">
        {user && user.role === "admin" && (
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "400",
            }}
            href="/dashboard"
            className="navbar--item btn-primary btn"
          >
            Dashboard
          </a>
        )}
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
          }}
          href="/"
          className="navbar--item btn-primary btn"
        >
          Main
        </a>
        <div className="navbar--item navbar--select">
          <Select
            style={{}}
            label="Genres"
            onSelect={onSelectSubmit}
            name="genres"
            options={SelectOptions}
          />
        </div>
      </div>
      <div className="auth">
        {user !== null ? (
          <AuthItem
            onClick={() => {
              localStorage.removeItem("token");
              window.location = "/";
            }}
            label="Logout"
            className=" btn"
          />
        ) : (
          authlink.map((el, i) => (
            <AuthItem
              key={i}
              className="btn-secondary btn"
              path={el.path}
              label={el.label}
              icon={el.icon}
            />
          ))
        )}
        <div className="auth--user"></div>
      </div>
    </header>
  );
};

export default Header;
