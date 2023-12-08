import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './home.module.scss'
import {decrement, increment} from "../../store/slices/countSlice.js";
import {Button} from "@mui/material";

const Home = () => {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()
    const handlePlus = () => {
        dispatch(increment())
    }
    const handleMinus = () => {
        dispatch(decrement())
    }
    return (
        <div className={classes.home}>
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

export default Home;