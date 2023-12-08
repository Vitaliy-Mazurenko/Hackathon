import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Question from "./pages/question/Question.jsx";
import Home from "./pages/home/Home.jsx"

function App() {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path="*" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/question' element={<Question/>}/>
            </Routes>
        </>
    );
}

export default App;
