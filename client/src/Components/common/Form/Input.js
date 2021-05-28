import React from "react";

const Input = (props) => {
  const { type, name, value, changeHandler, placeholder } = props;

  return (
    <input
      className="login-container__login-form--email"
      type={type}
      name={name}
      value={value}
      onChange={(e) => changeHandler(e)}
      placeholder={placeholder}
    />
  );
};

export default Input;
