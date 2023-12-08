import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Question from "./pages/question/Question.jsx";

const Home = React.lazy(() => import("./pages/home/Home.jsx"))

function App() {

    return (
        <Routes>
            <Route path='*' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/question' element={<Question/>}/>
        </Routes>
    )
}

export default App
