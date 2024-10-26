import "./DownloadApp.css";
import { CursorProps } from "../../App";
import Button from "../../components/Button/Button";

type DownloadAppProps = CursorProps;

export default function DownloadApp({
  cursorEnter,
  cursorLeave,
}: DownloadAppProps) {
  return (
    <div className="download-app-container">
      <div className="cta-container">
        <a href="/mobiefy.apk" download>
          <Button
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
            }}
          >
            Baixar Mobiefy
          </Button>
        </a>
      </div>
    </div>
  );
}
