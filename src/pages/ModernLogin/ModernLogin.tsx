import style from "./ModernLogin.module.css";
import bg from "../../assets/images/bg.jpg";

export const ModernLogin = () => {
  return (
    <div className={style.login}>
      <img src={bg} className={style.background} />
      <h3>Welcome Back!</h3>
      <h2>WebDesign</h2>
      <form className={style.loginForm}>
        <input type="password" placeholder="Enter your passcode" />
        <button type="submit">LOGIN</button>
        <a href="#">Forget your password?</a>
      </form>
    </div>
  );
};
