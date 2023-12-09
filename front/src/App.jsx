import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Question from "./pages/question/Question.jsx";
import Home from "./pages/home/Home.jsx"

function App() {
    const login = localStorage.getItem('login')

    return (
        <>
            <Header/>
            <Sidebar/>
            {!(login?.length > 1) ?
                <Routes>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path='/question' element={<Question/>}/>
                </Routes> :
                <Routes>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Home/>}/>
                </Routes>
            }
        </>
    );
}

export default App;
