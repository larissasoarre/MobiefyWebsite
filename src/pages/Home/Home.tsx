import { CursorProps } from "../../App";
import About from "../../components/About/About";
import Accessibility from "../../components/Accessibility/Accessibility";
import Conclusion from "../../components/Conclusion/Conclusion";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Route from "../../components/Route/Route";

type HomeProps = CursorProps;

export default function Home({ cursorEnter, cursorLeave }: HomeProps) {
  return (
    <>
      <Header cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
      <About />
      <Accessibility />
      <Features cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
      <Route />
      <Conclusion cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
      <Footer cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
    </>
  );
}
