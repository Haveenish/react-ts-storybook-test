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
  /**
   * Optional button icon
   */
  icon?: React.ReactNode;
}

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${size} button--${primary ? "primary" : "secondary"}`}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {!!icon && (
        <span className="button-icon">{icon}</span>
      )}
      {label}
    </button>
  );
};

export default Button;
