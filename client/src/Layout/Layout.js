import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = (props) => {
  return (
    <>
      <Header user={props.user} setState={props.setState} />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
