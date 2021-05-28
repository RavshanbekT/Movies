import React, { useState } from "react";
import Form from "../../Components/common/Form/Form";
import Input from "../../Components/common/Form/Input";
import { registerUser } from "../../AuthService/userService";
const SignUp = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");

  const ChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (event) => {
    try {
      event.preventDefault();
      await registerUser(input);
      window.location = "/";
    } catch (error) {
      setError("Oops something went wrong, check again fields");
      console.log(error.response);
    }
  };

  return (
    <div className="login-container">
      <Form formLabel="Sign Up" error={error} submitHandler={SubmitHandler}>
        <Input
          type="text"
          name="text"
          value={input.firstname}
          changeHandler={ChangeHandler}
          placeholder="Firstname"
        />
        <Input
          type="text"
          name="text"
          value={input.lastname}
          changeHandler={ChangeHandler}
          placeholder="Lastname"
        />
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
        <Input
          type="password"
          name="passwordConfirm"
          value={input.passwordConfirm}
          changeHandler={ChangeHandler}
          placeholder="Password Confrim"
        />
      </Form>
    </div>
  );
};

export default SignUp;
