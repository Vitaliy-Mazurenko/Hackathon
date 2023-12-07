import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./pages/home/Home.jsx"))

function App() {

    return (
        <Routes>
            <Route path='*' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}

export default App
