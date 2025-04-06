import React from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      type = "text",
      placeholder,
      onChange,
      className = "",
      disabled = false,
      required = false,
      defaultValue,
      maxLength,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue}
        maxLength={maxLength}
        className={`input ${className}`}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
