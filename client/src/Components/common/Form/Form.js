import React from "react";

const Form = (props) => {
  const { children, formLabel, error, submitHandler } = props;
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="login-container__login-form"
    >
      <h3 className="login-container__login-form--headline">{formLabel}</h3>
      {error && <h5 style={{ textAlign: "center", color: "red" }}>{error}</h5>}

      {children}
      <button
        type="submit"
        className="btn btn-primary login-container__login-form--btn"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
