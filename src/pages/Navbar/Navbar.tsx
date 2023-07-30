import { useState } from "react";
import style from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";

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
        <button type="button" className={style.active}>
          Youtube
        </button>
        <button type="button" className={style.active}>
          Archive
        </button>
        <button type="button" className={style.active}>
          Projects
        </button>
      </nav>
    </nav>
  );
};
