import { useState } from 'react';
// import {useDispatch, useSelector} from "react-redux";
import classes from './home.module.scss'
// import {decrement, increment} from "../../store/slices/countSlice.js";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Home = () => {
    // const count = useSelector(state => state.count.count)
    // const dispatch = useDispatch()
    // const handlePlus = () => {
    //     dispatch(increment())
    // }
    // const handleMinus = () => {
    //     dispatch(decrement())
    // }

  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')



  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value.trim())
    setPasswordError('');
  }

  const handleBlurPassword = () => {
    const passwordValid = password.length >= 6;
    setPasswordError(passwordValid ? '' : 'Password is too short');
  }

  const handleSubmit = async () => {
    if (password) {   
    navigate('/botSettings1');
    }

  }

    return (
        <div className={classes.home}>
             <div className={classes.header}>
                 </div>
      <form className={classes.eForm}>
        
        <div className={classes.groupForm}>
        <h2 className={classes.textForm}>е-Ветеран</h2>
          <TextField
            id="outlined-basic"
            label="Логін"
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="form-control" name="login"
            // helperText={loginError}
            // error={!!loginError}
          />
        </div>
        <div className={classes.groupForm}>
          <TextField
            id="outlined-password-input"
            type="password"
            label="Пароль"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            className="form-control" name="password"
            helperText={passwordError}
            error={passwordError}
          />
        </div>
        <Button className={classes.buttonLogin}
          variant="contained"
          disabled={passwordError}
          onClick={handleSubmit}>Увійти
        </Button>

        {/* {loginError ? (
          <div style={{
            textAlign: 'start',
            marginTop: 30,
            paddingLeft: '25px',
            color: 'red',
          }}>
            - {loginError}
          </div>
        ) : null} */}
      </form>
        </div>
    );
};

export default Home;