import axios from "axios";
const url = "http://localhost:5000/api/users";
const token = localStorage.getItem("token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const registerUser = async (form) => {
  const { data } = await axios.post(`${url}/signup`, form);
  localStorage.setItem("token", data.token);
};

export const getUser = async () => {
  const { data } = await axios.get(`${url}/me`);
  return data;
};

export const getToken = () => token;
