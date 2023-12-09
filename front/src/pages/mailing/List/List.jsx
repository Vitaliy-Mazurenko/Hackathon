import { useState } from "react";
import search from "../../../assets/search.svg";
import filter from "../../../assets/filter.svg";
import del from "../../../assets/delete.svg";
import { MenuItem, TextField } from "@mui/material";
import style from "./List.module.scss";

const currencies = [
  {
    value: "Назвою А-Я",
    label: "Назвою А-Я",
  },
  {
    value: "Назвою Я-А",
    label: "Назвою Я-А",
  },
  {
    value: "Дата за зростанням",
    label: "Дата за зростанням",
  },
  {
    value: "Дата за спаданням",
    label: "Дата за спаданням",
  },
];

const data = [
  {
    isChoosen: false,
    title: "Відкриття нового реабілітаційного центру",
    time: {
      start: { date: "08.12.2023", time: "01:00" },
      end: { date: "10.12.2023", time: "01:00" },
    },
    region: "Львівська",
    status: "Активна",
  },
  {
    isChoosen: false,
    title: "Відкриття нового реабілітаційного центру",
    time: {
      start: { date: "08.12.2023", time: "01:00" },
      end: { date: "10.12.2023", time: "01:00" },
    },
    region: "Сумська",
    status: "Завершена",
  },
];

function List() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [checkboxes, setCheckboxes] = useState(Array(data.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);

    const count = updatedCheckboxes.filter(Boolean).length;
    setSelectedCount(count);
  };
  const handleDelete = () => {
    console.log("Deleting selected items");
  };
  return (
    <div className={style.table}>
      <div className={style.head}>
        {selectedCount > 0 ? (
          <div className={style.control}>
            <div className={style.counter}>{selectedCount} обрано</div>
            <div className={style.buttons}>
              <button>
                <img src={del} alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className={style.default}>
            <div className={style.searchBar}>
              <button className={style.searchBtn}>
                <img className={style.searchIcon} src={search} alt="" />
              </button>

              <input
                className={style.searchInput}
                type="text"
                name=""
                id=""
                placeholder="Пошук"
              />
            </div>
            <div className={style.filters}>
              <TextField
                id="outlined-select-currency"
                select
                label="Сортувати"
                defaultValue="Назвою А-Я"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <button
                className={style.filterBtn}
                onClick={() => {
                  console.log("filtering");
                }}
              >
                <img src={filter} alt="" />
                Фільтр
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={style.list}>
        <div className={`${style.listItem} ${style.firstLine}`}>
          <div className={style.check}>
            <input type="checkbox" />
          </div>
          <div className={style.itemTitle}>Назва</div>
          <div className={style.date}>Дата початку</div>
          <div className={style.date}>Дата завершення</div>
          <div className={style.region}>Область</div>
          <div className={style.status}>Статус</div>
          <div className={style.status}></div>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.listItem}>
              <div className={style.check}>
                <input
                  type="checkbox"
                  checked={checkboxes[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
              <div className={style.itemTitle}>{item.title}</div>
              <div className={style.date}>
                <span>{item.time.start.date}</span>
                <span>{item.time.start.time}</span>
              </div>
              <div className={style.date}>
                <span>{item.time.end.date}</span>
                <span>{item.time.end.time}</span>
              </div>
              <div className={style.region}>
                <span>{item.region}</span>
              </div>
              <div className={style.status}>
                <span
                  className={
                    item.status == "Активна" ? style.active : style.complete
                  }
                >
                  {item.status}
                </span>
              </div>
              <div>
                <button onClick={handleDelete} className={style.delBtn}>
                  <img src={del} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
