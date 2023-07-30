import { useState } from "react";
import style from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { BiSolidComponent } from "react-icons/bi";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className={style.navbar}>
      <div
        className={show ? style.navbarOnOverlay : style.navbarOverlay}
        onClick={() => setShow(!show)}
      ></div>
      <button
        type="button"
        className={style.navbarBurguer}
        onClick={() => setShow(!show)}
      >
        <BiMenu size="23px" />
      </button>
      <h1 className={style.navbarTitle}>WebDesign</h1>

      <nav className={show ? style.navbarMenuOpen : style.navbarMenu}>
        <div className={style.boxtitle}>
          <span className={style.title}>Elementos</span>
          <BiSolidComponent size="20px" color="#73e9d9" />
        </div>
        <button type="button" className={style.active}>
          Login
        </button>
        <button type="button" className={style.active}>
          ModernLogin
        </button>
        <button type="button" className={style.active}>
          Navbar
        </button>
        <button type="button" className={style.active}>
          Popup
        </button>
        <button type="button" className={style.active}>
          Sidebar
        </button>
        <button type="button" className={style.active}>
          TaskTracker
        </button>
        <button type="button" className={style.active}>
          Signup
        </button>
        <button type="button" className={style.active}>
          Footer
        </button>
      </nav>
    </nav>
  );
};
