import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Login } from "./pages/Login/Login";
import { ModernLogin } from "./pages/ModernLogin/ModernLogin";
import { Navbar } from "./pages/Navbar/Navbar";
import { Popup } from "./pages/Popup/Popup";
import { Sidebar } from "./pages/Sidebar/Sidebar";
import { Signup } from "./pages/Signup/Signup";
import { TaskTracker } from "./pages/TaskTracker/TaskTracker";
import { Footer } from "./pages/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
