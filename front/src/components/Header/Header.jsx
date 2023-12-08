import style from "./Header.module.scss";

import person from "../../assets/Person.svg";

function Header() {
  return (
    <header>
      <span className={style.title}>е-Ветеран</span>
      <div className={style.user}>
        <img src={person} alt="" />
      </div>
    </header>
  );
}

export default Header;
