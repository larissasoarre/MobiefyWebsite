import "./Footer.css";
import { CursorProps } from "../../App";
import { Link } from "react-router-dom";

type Footer = CursorProps;

export default function Footer({ cursorEnter, cursorLeave }: Footer) {
  return (
    <footer className="content-breakpoint">
      <p>© Mobiefy 2024 - Todos os direitos reservados.</p>
      <ul>
        <li>
          <Link
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            to={"/termos-de-uso"}
          >
            Termos de Uso
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            to={"/politica-de-privacidade"}
          >
            Política de Privacidade
          </Link>
        </li>
      </ul>
    </footer>
  );
}
