import React from "react";
import "./textField.css";

interface TextFieldProps {
  /**
   * Value in the TextField
   */
  value: string;
  /**
   * Handler on value change
   */
  onChange(val: string): void;
  /**
   * Label to be displayed above TextField
   */
  label?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"; // default is medium
  /**
   * Minimum input length
   */
  minLength?: number;
  /**
   * Maximum input length
   */
  maxLength?: number;
}

const TextField = ({
  value,
  onChange,
  label = "",
  placeholder = "",
  size = "medium",
  minLength,
  maxLength,
}: TextFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className="textfield-wrapper">
      <label className="textfield-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`textfield-input textfield-input--${size}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextField;
