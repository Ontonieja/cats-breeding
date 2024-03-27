"use client";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: "primary" | "secondary" | "back" | "cancel";
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  type = "button",
  buttonStyle,
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  const styles = {
    primary:
      "bg-pale-blue text-white font-semibold hover:bg-[#0351A1] transition ease-in-out duration-300",
    secondary:
      "border-2 border-pale-blue text-pale-blue font-semibold hover:bg-pale-blue transition ease-in-out duration-500 hover:text-white",
    back: "bg-primary-dark text-primary-light-text",
    cancel: "text-primary-dark-text hover:bg-gray-light",
  };

  const buttonClasses = {
    basic: "px-8 py-3 rounded-[54px]",
    buttonType: buttonStyle ? styles[buttonStyle] : "",
    class: className || "",
    icon: icon ? "flex items-center" : "",
  };

  return (
    <button
      {...props}
      type={type || "button"}
      onClick={onClick}
      className={`${Object.values(buttonClasses).filter(Boolean).join(" ")}`}
    >
      {children}
    </button>
  );
};

export default Button;
