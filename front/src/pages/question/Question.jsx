import React, {useEffect, useState} from 'react';
import classes from './question.module.scss'
import {Button} from "@mui/material";
import Item from "./componets/item/Item.jsx";
import RedactItem from "./componets/redactItem/RedactItem.jsx";
import empty from '../../assets/image 6.png'


const Question = () => {

    const [admin, setAdmin] = useState(false)
    const handleButton = () => {
        setAdmin(true)
    }
    const [isSaveAvailable, setIsSaveAvailable] = useState(true)

    const [questions, setQuestions] = useState([
        {
            id: 1,
            name: "Хто може взяти участь в проєкті",
            description: "Ми чекаємо на вашу заяву на участь, якщо ви:\n" +
                "ветеран війни, член сім’ї ветерана, постраждалий учасник Революції Гідності, член сім’ї загиблого (померлого) ветерана, член сім’ї загиблого (померлого) Захисника чи Захисниці України та перебуваєте на обліку в Єдиному державному реєстрі ветеранів війни;\n" +
                "маєте ступінь освіти не нижче молодшого бакалавра;\n" +
                "маєте Реєстраційний номер облікової картки платника податків (РНОКПП):\n" +
                "відчуваєте в собі сили стати центром ветеранського життя у своїй територіальній громаді."
        },
        {
            id: 2,
            name: "Як подати електронну заяву?",
            description: "Зверніть увагу\n" +
                "Для заповнення заяви вам потрібні:\n" +
                "електронний підпис: файловий ключ, апаратний ключ або Дія.Підпис;\n" +
                "документ про освіту;\n" +
                "членам сім’ї ветерана – документ, що підтверджує родинні зв'язки.\n" +
                "\n" +
                "Авторизуйтеся у кабінеті на eveteran.gov.ua за допомогою електронного підпису.\n" +
                "Покроково заповніть онлайн-форму заяви та пройдіть онлайн тестування.\n" +
                "Переконайтесь, що відомості в заяві є коректними і достовірними.\n" +
                "Підпишіть заяву за допомогою електронного підпису.\n" +
                "Якщо заяву подає член сім'ї, ветеран має погодити її, наклавши свій електронний підпис.\n" +
                "Відповідальність за достовірність відомостей, що містяться в заяві, несе заявник. Заяву буде надіслано до Мінветеранів, де буде перевірено наявність статусу.\n" +
                "Подати можна не більше однієї заяви від однієї особи. Відправлену заяву відредагувати не можна."
        },
        {
            id: 3,
            name: "Як подати заяву через чат-бот?",
            description: "Оберіть опцію “Подати заяву на участь в проєкті”.\n" +
                "Пройдіть опитування.\n" +
                "Очікуйте на повідомлення про прийняття заяви."
        },
        {
            id: 4,
            name: "Наступні кроки",
            description: "На вас очікує конкурсний відбір. Кандидати, які його успішно пройшли, будуть скеровані на навчання, підвищення кваліфікації та працевлаштовані в одній з територіальних громад на ваш вибір – Вінницькій, Дніпропетровській, Львівській, Миколаївській, Сумській, Полтавській, Закарпатській, Київській або в місті Києві."
        },
    ])
    const [newQuestions, setNewQuestions] = useState([
        {
            id: 1,
            name: "Хто може взяти участь в проєкті",
            description: "Ми чекаємо на вашу заяву на участь, якщо ви:\n" +
                "ветеран війни, член сім’ї ветерана, постраждалий учасник Революції Гідності, член сім’ї загиблого (померлого) ветерана, член сім’ї загиблого (померлого) Захисника чи Захисниці України та перебуваєте на обліку в Єдиному державному реєстрі ветеранів війни;\n" +
                "маєте ступінь освіти не нижче молодшого бакалавра;\n" +
                "маєте Реєстраційний номер облікової картки платника податків (РНОКПП):\n" +
                "відчуваєте в собі сили стати центром ветеранського життя у своїй територіальній громаді."
        },
        {
            id: 2,
            name: "Як подати електронну заяву?",
            description: "Зверніть увагу\n" +
                "Для заповнення заяви вам потрібні:\n" +
                "електронний підпис: файловий ключ, апаратний ключ або Дія.Підпис;\n" +
                "документ про освіту;\n" +
                "членам сім’ї ветерана – документ, що підтверджує родинні зв'язки.\n" +
                "\n" +
                "Авторизуйтеся у кабінеті на eveteran.gov.ua за допомогою електронного підпису.\n" +
                "Покроково заповніть онлайн-форму заяви та пройдіть онлайн тестування.\n" +
                "Переконайтесь, що відомості в заяві є коректними і достовірними.\n" +
                "Підпишіть заяву за допомогою електронного підпису.\n" +
                "Якщо заяву подає член сім'ї, ветеран має погодити її, наклавши свій електронний підпис.\n" +
                "Відповідальність за достовірність відомостей, що містяться в заяві, несе заявник. Заяву буде надіслано до Мінветеранів, де буде перевірено наявність статусу.\n" +
                "Подати можна не більше однієї заяви від однієї особи. Відправлену заяву відредагувати не можна."
        },
        {
            id: 3,
            name: "Як подати заяву через чат-бот?",
            description: "Оберіть опцію “Подати заяву на участь в проєкті”.\n" +
                "Пройдіть опитування.\n" +
                "Очікуйте на повідомлення про прийняття заяви."
        },
        {
            id: 4,
            name: "Наступні кроки",
            description: "На вас очікує конкурсний відбір. Кандидати, які його успішно пройшли, будуть скеровані на навчання, підвищення кваліфікації та працевлаштовані в одній з територіальних громад на ваш вибір – Вінницькій, Дніпропетровській, Львівській, Миколаївській, Сумській, Полтавській, Закарпатській, Київській або в місті Києві."
        },
    ])

    const handleAdd = () => {
        setAdmin(true)
        const a = newQuestions.slice()
        a.push({
            id: Math.random(),
            name: " ",
            description: " "
        })
        setNewQuestions(a)
    }
    const handleSave = () => {
        if (isSaveAvailable || newQuestions.length < 1) {
            setQuestions(newQuestions)
            setAdmin(false)
        }
    }
    const handleBack = () => {
        setAdmin(false)
        setNewQuestions(questions)
    }
    return (
        <div className={classes.question}>
            <div className={classes.header}>
                <h2>Питання-Відповіді</h2>
                {(newQuestions.length > 0 || admin) ? <> {admin ? <div>
                        <Button variant='outlined' onClick={handleBack} className={classes.back}
                                style={{marginRight: 10}}>Відмінити</Button>
                        <Button variant='contained' className={classes.edit} onClick={handleSave}>Зберегти</Button>
                    </div> :
                    <Button variant='contained' className={classes.edit} onClick={handleButton}>Редагувати</Button>}
                </> : <Button variant='contained' className={classes.edit} onClick={handleAdd}>Створити</Button>}
            </div>
            {newQuestions.length > 0 ?
                <>
                    <div className={classes.container}>
                        {!admin
                            ?
                            questions.map((e, index) => {
                                return <Item
                                    key={Math.random()}
                                    number={index}
                                    content={e}
                                />
                            })
                            :
                            newQuestions.map((e, index) => {
                                return <RedactItem
                                    isSaveAvailable={isSaveAvailable}
                                    setIsSaveAvailable={setIsSaveAvailable}
                                    newQuestions={newQuestions}
                                    setNewQuestions={setNewQuestions}
                                    number={index} key={e.id}
                                    content={e}
                                />
                            })}
                    </div>
                    <Button variant='contained' onClick={handleAdd} className={classes.add}>Додати Питання</Button>
                </> :
                <div className={classes.empty}>
                    <p>У Вас ще не має створених Питаннь-Відповідей</p>
                    <img src={empty} alt=""/>
                    {questions.length > 0 && <Button variant='contained' onClick={handleAdd} className={classes.add}>Додати Питання</Button>}
                </div>}
        </div>
    );
};

export default Question;