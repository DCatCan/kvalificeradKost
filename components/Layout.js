import { Navbar } from "./Navbar";
import style from "../styles/Layout.module.scss";
import { Footercomp } from "./Footercomp";

export const Layout = ({ children }) => {
  return (
    <>
      <div className={style.body}>
        <Navbar />
        <div>{children}</div>
        <Footercomp />
      </div>
    </>
  );
};
