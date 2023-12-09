import { useState } from "react";
import dayjs from "dayjs";
import { MenuItem, TextField } from "@mui/material";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import style from "./NewMailing.module.scss";
import { TimePicker } from "@mui/x-date-pickers";
const regions = [
  { value: "Вінницька", label: "Вінницька" },
  { value: "Волинська", label: "Волинська" },
  { value: "Дніпропетровська", label: "Дніпропетровська" },
  { value: "Донецька", label: "Донецька" },
  { value: "Житомирська", label: "Житомирська" },
  { value: "Закарпатська", label: "Закарпатська" },
  { value: "Запорізька", label: "Запорізька" },
  { value: "Івано-Франківська", label: "Івано-Франківська" },
  { value: "Київська", label: "Київська" },
  { value: "Кіровоградська", label: "Кіровоградська" },
  { value: "Луганська", label: "Луганська" },
  { value: "Львівська", label: "Львівська" },
  { value: "Миколаївська", label: "Миколаївська" },
  { value: "Одеська", label: "Одеська" },
  { value: "Полтавська", label: "Полтавська" },
  { value: "Рівненська", label: "Рівненська" },
  { value: "Сумська", label: "Сумська" },
  { value: "Тернопільська", label: "Тернопільська" },
  { value: "Харківська", label: "Харківська" },
  { value: "Херсонська", label: "Херсонська" },
  { value: "Хмельницька", label: "Хмельницька" },
  { value: "Черкаська", label: "Черкаська" },
  { value: "Чернівецька", label: "Чернівецька" },
  { value: "Чернігівська", label: "Чернігівська" },
];

function NewMailing() {
  const [start, setStart] = useState(dayjs("2023-12-09"));
  const [end, setEnd] = useState(dayjs("2023-12-09"));
  const [name, setName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Вінницька");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.name}>
        <TextField
          id="outlined-basic"
          label="Назва"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={style.date}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={start}
            onChange={(newValue) => setStart(newValue)}
          />
          <TimePicker
            label="With Time Clock"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </div>
      <div className={style.date}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={end}
            onChange={(newValue) => setEnd(newValue)}
          />
          <TimePicker
            label="With Time Clock"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </div>
      <div className={style.region}>
        <TextField
          id="outlined-select-currency"
          select
          label="Оберіть область"
          defaultValue="Вінницька"
          fullWidth
          value={selectedRegion}
          onChange={handleRegionChange}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: "200px",
                  overflowY: "auto",
                },
              },
            },
          }}
        >
          {regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={style.message}>
        <p>Текст розсилки</p>
        <TextField
          id="text"
          fullWidth
          multiline
          value={message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
}

export default NewMailing;
