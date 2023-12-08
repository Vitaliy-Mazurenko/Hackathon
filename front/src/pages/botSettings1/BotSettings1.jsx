// import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './botSettings1.module.scss'
import {decrement, increment} from "../../store/slices/countSlice.js";
import {Button} from "@mui/material";
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const BotSettings1 = () => {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()
    const handlePlus = () => {
        dispatch(increment())
    }
    const handleMinus = () => {
        dispatch(decrement())
    }
    return (
        <div className={classes.botSettings1}>
                    <Header />
                    <Sidebar>

                    </Sidebar>
                    <Button onClick={handleMinus}>
                -
            </Button>
            <h1>{count}</h1>
            <Button onClick={handlePlus}>
                +
            </Button>

        </div>
    );
};

export default BotSettings1;