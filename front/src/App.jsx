import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Question from "./pages/question/Question.jsx";

import Login from "./pages/login/Login.jsx";

// import axios from "axios";
// import Analyst from "./pages/analyst/Analyst.jsx";

import Home from "./pages/home/Home.jsx";
import Mailing from "./pages/mailing/Mailing.jsx";
import Form from "./pages/form/Form.jsx";
import Analyst from "./pages/analyst/Analyst.jsx";


function App() {
    const login = localStorage.getItem("login");

    return (
        <>

            {(login?.length > 1) ? (
                <>
                    <Header/>
                    <Sidebar/>
                    <div className="wrapper">
                        <div className="content">
                            <Routes>
                                <Route path="*" element={<Navigate to="/home"/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/question" element={<Question/>}/>
                                <Route path="/mailing" element={<Mailing/>}/>
                                <Route path="/form" element={<Form/>}/>
                                <Route path="/analyst" element={<Analyst/>}/>
                            </Routes>
                        </div>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Home/>}/>
                </Routes>
            )}
        </>
    );
}

export default App;
