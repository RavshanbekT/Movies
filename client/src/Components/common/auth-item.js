import { IconContext } from "react-icons";

const AuthItem = ({ className, label, path, icon, onClick }) => (
  <div onClick={() => onClick()} className={`auth--item ${className}`}>
    <IconContext.Provider value={{ size: "3rem", className: "auth--icon" }}>
      {icon && icon}
    </IconContext.Provider>
    <a href={path}>{label}</a>
  </div>
);

export default AuthItem;
