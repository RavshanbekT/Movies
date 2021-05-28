import { IoMdKey } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

export const SelectOptions = [
  {
    value: "",
    name: "None",
  },
  {
    value: "action",
    name: "Action",
  },
  {
    value: "adventure",
    name: "Adventure",
  },
  {
    value: "romance",
    name: "Romance",
  },
  {
    value: "fantasy",
    name: "Fantasy",
  },
];

export const movieOptions = [
  {
    name: "Get Movie",
    value: "get-movie",
  },
  {
    name: "Upate Movie",
    value: "update-movie",
  },
  {
    name: "Delete Movie",
    value: "delete-movie",
  },
  {
    name: "Get All Movies",
    value: "delete-all-movies",
  },
];

export const userOptions = [
  {
    name: "Get User",
    value: "get-User",
  },
  {
    name: "Upate User",
    value: "update-user",
  },
  {
    name: "Delete User",
    value: "delete-user",
  },
  {
    name: "Get All Users",
    value: "delete-all-users",
  },
];

export const authlink = [
  {
    className: "auth--sign-in",
    label: "Login",
    path: "/login",
    icon: <IoMdKey />,
  },
  {
    className: "auth--sign-up",
    label: "Sign up",
    path: "/signup",
    icon: <FaUserEdit />,
  },
];
