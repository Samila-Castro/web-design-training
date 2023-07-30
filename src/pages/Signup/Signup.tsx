import style from "./Signup.module.css";
import { BiBitcoin } from "react-icons/bi";

export const Signup = () => {
  return (
    <>
      <div className={style.circle}></div>
      <div className={style.card}>
        <div className={style.logo}>
          <BiBitcoin size="50px" color="#216ce7" />
        </div>
        <h2>Create Account</h2>
        <form className={style.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">SIGN UP</button>
        </form>
        <footer>
          Existing users, sign in <a href="#">Here</a>
        </footer>
      </div>
    </>
  );
};
