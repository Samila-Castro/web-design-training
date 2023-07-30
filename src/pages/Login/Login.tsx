import style from "./Login.module.css";

export const Login = () => {
  return (
    <div className={style.loginCard}>
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form className={style.loginForm}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget your password?</a>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};
