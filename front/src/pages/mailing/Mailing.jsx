import { useState } from "react";

import style from "./mailing.module.scss";
import List from "./List/List";
import NewMailing from "./NewMailing/NewMailing";

function Mailing() {
  const [isMakingNew, setIsMakingNew] = useState(false);
  return (
    <div className={style.mailing}>
      <div className={style.header}>
        <h3>Розсилка</h3>
        <button
          className={style.newMailing}
          onClick={() => {
            setIsMakingNew(!isMakingNew);
          }}
        >
          {isMakingNew ? "Повернутись" : "Створити Нову"}
        </button>
      </div>
      <div className={style.toolbar}>
        {isMakingNew ? <NewMailing /> : <List />}
      </div>
    </div>
  );
}

export default Mailing;
