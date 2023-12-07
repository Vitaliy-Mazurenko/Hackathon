import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './home.module.scss'
import {decrement, increment} from "../../store/slices/countSlice.js";

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
            <buttton className={classes.button} onClick={handleMinus}>
                -
            </buttton>
            <h1>{count}</h1>
            <buttton className={classes.button} onClick={handlePlus}>
                +
            </buttton>
        </div>
    );
};

export default Home;