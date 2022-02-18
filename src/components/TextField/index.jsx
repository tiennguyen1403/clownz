import React from "react";
import { ErrorMessage, useField } from "formik";

import "./textfield.scss";

function TextField({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="textfield">
      <label htmlFor={field.name}>
        {label}
        <span className="required">*</span>
      </label>
      <input
        {...field}
        {...props}
        autoComplete="off"
        placeholder={placeholder}
        className={`${meta.touched && meta.error && "isInvalid"}`}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
}

export default TextField;
