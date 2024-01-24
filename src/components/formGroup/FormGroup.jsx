import React from "react";

const FormGroup = ({ label, name, value, changeHandler, className }) => {
  return (
    <div
      className={`form-group ${className} ${value.length > 0 ? "active" : ""}`}
    >
      <input type="text" value={value} name={name} onChange={changeHandler} />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default FormGroup;
