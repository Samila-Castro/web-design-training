import { useState } from "react";
import style from "./Sidebar.module.css";
import { BiMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiSolidCog } from "react-icons/bi";
import { BiShapeCircle } from "react-icons/bi";
import { BiCoinStack } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiSolidLayer } from "react-icons/bi";
import { BiSolidLock } from "react-icons/bi";
import { BiSpeaker } from "react-icons/bi";
import { BiSolidMusic } from "react-icons/bi";

export const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className={show ? `${style.sidebarOpen}` : `${style.sidebar}`}>
      <div className={style.sidebarInner}>
        <header className={style.sidebarHeader}>
          <button
            type="button"
            className={style.sidebarBurguer}
            onClick={() => setShow(!show)}
          >
            <BiMenu color="#f9f9f9" size="25px" />
          </button>
        </header>
        <nav className={style.sidebarMenu}>
          <button type="button">
            <BiHome color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Home</span>
          </button>
          <button type="button">
            <BiUser color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Accounts</span>
          </button>
          <button type="button" className={style.hasBorder}>
            <BiSolidCog color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Settings</span>
          </button>
          <button type="button">
            <BiShapeCircle color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Blockchain</span>
          </button>
          <button type="button">
            <BiCoinStack color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Databases</span>
          </button>
          <button type="button">
            <BiSpeaker color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>AudioVibe</span>
          </button>
          <button type="button" className={style.hasBorder}>
            <BiSolidMusic color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Soundblast</span>
          </button>
          <button type="button">
            <BiFolder color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Folders</span>
          </button>
          <button type="button">
            <BiSolidLayer color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Levels</span>
          </button>
          <button type="button">
            <BiSolidLock color="#f9f9f9" size="20px" />
            <span className={show ? style.onShowSidebar : ""}>Security</span>
          </button>
        </nav>
      </div>
    </nav>
  );
};
