import React, {useState} from 'react';
import classes from './question.module.scss'
import {Button} from "@mui/material";
import Item from "./componets/item/Item.jsx";

const Question = () => {

    const [admin, setAdmin] = useState(false)
    const handleButton = () => {
        setAdmin(!admin)
    }

    const [questions, setQuestions] = useState([
        {
            id: 1,
            name: "Хто може взяти участь в проєкті",
            description: "<h5>Ми чекаємо на вашу заяву на участь, якщо ви:</h5>" +
                "<ul>" +
                "<li>ветеран війни, член сім’ї ветерана, постраждалий учасник Революції Гідності, член сім’ї загиблого (померлого) ветерана, член сім’ї загиблого (померлого) Захисника чи Захисниці України та перебуваєте на обліку в Єдиному державному реєстрі ветеранів війни;\n</li>" +
                "<li>маєте ступінь освіти не нижче молодшого бакалавра;\n</li>" +
                "<li>маєте Реєстраційний номер облікової картки платника податків (РНОКПП):\n</li>" +
                "</ul>" +
                "<p>відчуваєте в собі сили стати центром ветеранського життя у своїй територіальній громаді.</p>"
        },
        {
            id: 2,
            name: "Як подати електронну заяву?",
            description: "<h5>Зверніть увагу</h5>" +
                "<p>Для заповнення заяви вам потрібні:</p>" +
                "<ul>" +
                "<li>електронний підпис: файловий ключ, апаратний ключ або Дія.Підпис;</li>" +
                "<li>документ про освіту;</li>" +
                "<li>членам сім’ї ветерана – документ, що підтверджує родинні зв'язки.</li>" +
                "</ul>" +
                "<ol>" +
                "<li>Авторизуйтеся у кабінеті на <a href='eveteran.gov.ua'>eveteran.gov.ua</a> за допомогою електронного підпису.</li>" +
                "<li>Покроково заповніть онлайн-форму заяви та пройдіть онлайн тестування.</li>" +
                "<li>Переконайтесь, що відомості в заяві є коректними і достовірними.</li>" +
                "<li>Підпишіть заяву за допомогою електронного підпису.</li>" +
                "</ol>" +
                "<p>Якщо заяву подає член сім'ї, ветеран має погодити її, наклавши свій електронний підпис.\n" +
                "Відповідальність за достовірність відомостей, що містяться в заяві, несе заявник. Заяву буде надіслано до Мінветеранів, де буде перевірено наявність статусу.\n" +
                "Подати можна не більше однієї заяви від однієї особи. Відправлену заяву відредагувати не можна.</p>"
        },
        {
            id: 3,
            name: "Як подати заяву через чат-бот?",
            description: "<ol>" +
                "<li>Оберіть опцію “Подати заяву на участь в проєкті”.\n</li>" +
                "<li>Пройдіть опитування.\n</li>" +
                "<li>Очікуйте на повідомлення про прийняття заяви.</li>" +
                "</ol>"
        },
        {
            id: 4,
            name: "Наступні кроки",
            description: "<p>На вас очікує конкурсний відбір. Кандидати, які його успішно пройшли, будуть скеровані на навчання, підвищення кваліфікації та працевлаштовані в одній з територіальних громад на ваш вибір – Вінницькій, Дніпропетровській, Львівській, Миколаївській, Сумській, Полтавській, Закарпатській, Київській або в місті Києві.</p>"
        },
    ])
    return (
        <div className={classes.question}>
            <React.Fragment>

                <div className={classes.header}>
                    <h2>Питання-Відповіді</h2>
                    {admin ? <div>
                            <Button variant='outlined' className={classes.back} style={{marginRight: 10}}
                                    onClick={handleButton}>Відмінити</Button>
                            <Button variant='contained' className={classes.edit} onClick={handleButton}>Зберегти</Button>
                        </div> :
                        <Button variant='contained' className={classes.edit} onClick={handleButton}>Редагувати</Button>}
                </div>

                <div className={classes.container}>
                    {questions.map((e,index)=>{
                        return <Item key={index} content={e}/>
                    })}
                </div>
            </React.Fragment>
        </div>
    );
};

export default Question;