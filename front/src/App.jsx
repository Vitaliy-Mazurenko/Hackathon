import { Navigate, Route, Routes } from "react-router-dom";
// import React from "react";

import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

// const Home = React.lazy(() => import("./pages/home/Home.jsx"));

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        <Route path='/login' element={<Login />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
