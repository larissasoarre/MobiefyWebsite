import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "./Button.css";

type ButtonProps = { children?: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
    variant?: "standard" | "mobile";
  };

export default function Button({
  variant = "standard",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${
        variant === "standard" ? "button-standard" : "button-mobile"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
