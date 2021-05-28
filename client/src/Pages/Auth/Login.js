import React, { useState } from "react";

import Form from "../../Components/common/Form/Form";
import Input from "../../Components/common/Form/Input";
import { loginUser } from "../../AuthService/authService";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const ChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (event) => {
    try {
      event.preventDefault();
      await loginUser(input);
      window.location = "/";
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <Form formLabel="Login" error={error} submitHandler={SubmitHandler}>
        <Input
          type="email"
          name="email"
          value={input.email}
          changeHandler={ChangeHandler}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={input.password}
          changeHandler={ChangeHandler}
          placeholder="Password"
        />
      </Form>
    </div>
  );
};

export default Login;
