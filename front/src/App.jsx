import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./pages/home/Home.jsx"))
const Users = React.lazy(() => import("./pages/users/Users.jsx"))

function App() {

    return (
        <Routes>
            <Route path='*' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
    )
}

export default App
