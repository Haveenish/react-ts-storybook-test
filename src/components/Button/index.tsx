import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return (
    <button
      type="button"
      className={`button button--${size} ${mode}`}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Button;
