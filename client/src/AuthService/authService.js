import axios from "axios";

const url = "http://localhost:5000/api/users/";
export const loginUser = async (form) => {
  const { data } = await axios.post(`${url}/login`, form);
  localStorage.setItem("token", data.token);
};
