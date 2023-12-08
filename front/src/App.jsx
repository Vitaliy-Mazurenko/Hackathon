import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
// import Header from "./components/Header/Header.jsx";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";


const Home = React.lazy(() => import("./pages/home/Home.jsx"))
const BotSettings1 = React.lazy(() => import("./pages/botSettings1/BotSettings1.jsx"))

function App() {

    return (
        <>
        {/* <Header />
        <Sidebar /> */}
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path='/botSettings1' element={<BotSettings1/>}/>
  
        </Routes>
      </>
  
        // <Routes>
        //     <Route path='*' element={<Navigate to='/home'/>}/>
        //     <Route path='/home' element={<Home/>}/>
        //     <Route path='/botSettings1' element={<BotSettings1/>}/>
        // </Routes>
    )
}

export default App
