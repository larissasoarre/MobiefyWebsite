import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { CursorProps } from "../../App";

type NavbarProps = CursorProps;

export default function Navbar({ cursorEnter, cursorLeave }: NavbarProps) {
  return (
    <nav className="header-navbar">
      <Link
        className="header-logo"
        to="/"
        onMouseEnter={cursorEnter}
        onMouseLeave={cursorLeave}
      >
        Mobiefy
      </Link>
      <ol className="header-navigation">
        <li>
          <Link
            to="/#about"
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/#features"
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
          >
            Vantagens
          </Link>
        </li>
        <li>
          <Link
            to="/mobieclub"
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
          >
            MobieClub
          </Link>
        </li>
        <li>
          <Button
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            onClick={() =>
              window.open(
                "https://github.com/larissasoarre/Mobiefy",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Baixar App
          </Button>
        </li>
      </ol>
    </nav>
  );
}
