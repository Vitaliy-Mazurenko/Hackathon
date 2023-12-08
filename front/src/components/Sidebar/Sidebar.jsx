import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

import message from "../../assets/message.svg";
import contacts from "../../assets/contacts.svg";
import analitycs from "../../assets/analitycs.svg";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <NavLink
        to="/home"
        className={`
        ${style.navLink}
         ${({ isActive }) => (isActive ? style.active : "")}`}
      >
        <img src={message} alt="" />
        Налаштування Боту
      </NavLink>
      <NavLink
        to="/setting"
        className={` ${style.active}
        ${style.navLink}
         ${({ isActive }) => (isActive ? style.active : "")}`}
      >
        <img src={contacts} alt="" />
        Заяви на Проєкт
      </NavLink>
      <NavLink
        to="/messages"
        className={`
        ${style.navLink}
         ${({ isActive }) => (isActive ? style.active : "")}`}
      >
        <img src={analitycs} alt="" />
        Аналітика
      </NavLink>
    </div>
  );
}

export default Sidebar;
