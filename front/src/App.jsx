import {Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Question from "./pages/question/Question.jsx";
import Home from "./pages/home/Home.jsx"
import axios from "axios";
import Analyst from "./pages/analyst/Analyst.jsx";
import Form from "./pages/form/Form.jsx";

function App() {
   const [login, setLogin] = useState(localStorage.getItem('login'))


    return (
        <>
            <Header/>
            <Sidebar/>
            {!(login?.length > 0) ?
                <Routes>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path='/question' element={<Question/>}/>
                    <Route path='/analyst' element={<Analyst/>}/>
                    <Route path='/form' element={<Form/>}/>
                </Routes> :
                <Routes>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login setLogin={setLogin}/>}/>
                </Routes>
            }
        </>
    );
}

export default App;
