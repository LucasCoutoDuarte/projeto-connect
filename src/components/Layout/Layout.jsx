import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import l from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={l.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}