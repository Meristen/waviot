import React from "react";
import "./input.scss";
const Input = ({ onChange, name, value, type, placeholder }) => {
  return (
    <div className="inputGroup">
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        type={type}
      />
    </div>
  );
};

export default Input;
