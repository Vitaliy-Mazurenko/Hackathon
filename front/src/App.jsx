import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Question from "./pages/question/Question.jsx";

import Login from "./pages/login/Login.jsx";

// import axios from "axios";
// import Analyst from "./pages/analyst/Analyst.jsx";

import Home from "./pages/home/Home.jsx";
import Mailing from "./pages/mailing/Mailing.jsx";


function App() {
  const login = localStorage.getItem("login");

/*
                    <Route path='/analyst' element={<Analyst/>}/>
*/
  return (
    <>
      <Header />
      <Sidebar />
      {(login?.length > 1) ? (
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/question" element={<Question />} />
              <Route path="/mailing" element={<Mailing />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );

}

export default App;
