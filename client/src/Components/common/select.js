import React from "react";

const Select = (props) => {
  const { label, onSelect, name, options } = props;
  return (
    <>
      <form className="select-form">
        <label className="select-form--label" htmlFor={name}>
          {label} :
        </label>
        <select
          onChange={(e) => onSelect(e.target.value)}
          className="select-form--select"
          name={name}
          id={name}
        >
          {options.map((option, i) => (
            <option
              key={i}
              className="select-form--option"
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Select;
