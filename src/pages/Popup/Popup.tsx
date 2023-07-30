import { useState } from "react";
import style from "./Popup.module.css";

export const Popup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Open Modal</button>
      <div
        className={show ? style.onShowBackground : ""}
        onClick={() => setShow(false)}
      ></div>
      <div className={show ? style.onModal : style.modal}>
        <h2>Modal window</h2>
        <p>
          You have opened the modal, they are great for displaying critical
          informations or confirming actions!
        </p>
      </div>
    </>
  );
};
