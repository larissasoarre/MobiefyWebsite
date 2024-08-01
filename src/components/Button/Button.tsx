import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "./Button.css";

type ButtonProps = { children?: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
