// import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './users.module.scss'
import {decrement, increment} from "../../store/slices/countSlice.js";
import { AppBar, Button } from "@mui/material";
// import PersonIcon from '@mui/icons-material/Person';


const Users = () => {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()
    const handlePlus = () => {
        dispatch(increment())
    }
    const handleMinus = () => {
        dispatch(decrement())
    }



    return (
        <div className={classes.users}>
            <AppBar className={classes.appBar}>
                <span>е-Ветеран</span>
                {/* <PersonIcon className="personIcon" /> */}
            </AppBar>
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

export default Users;