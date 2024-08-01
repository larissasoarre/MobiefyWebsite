import "./Header.css";
import Button from "../Button/Button";
import { CursorProps } from "../../App";
import { HTMLProps } from "react";

type HeaderProps = CursorProps & HTMLProps<HTMLDivElement>;

export default function Header({ cursorEnter, cursorLeave }: HeaderProps) {
  return (
    <div className="header-container">
      <nav className="header-navbar">
        <span className="header-logo">Mobiefy</span>
        <ol className="header-navigation">
          <li>
            <a onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} href="">
              Sobre
            </a>
          </li>
          <li>
            <a onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} href="">
              Vantagens
            </a>
          </li>
          <li>
            <Button onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
              Baixar App
            </Button>
          </li>
        </ol>
      </nav>
      <div className="header-content">
        <p>
          Desbloqueando viagens inteligentes com seu passaporte de mobilidade
          eficiente!
        </p>
        <Button onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
          Comece Já
        </Button>
      </div>
    </div>
  );
}
