import React, {useState} from 'react';
import classes from './analyst.module.scss'
import {Select, MenuItem, Box} from "@mui/material";
import {VictoryLine, VictoryTheme} from 'victory';

const Analyst = () => {
    const [days, setDays] = useState(10)

    const data = [
        {quarter: 1, earnings: 13},
        {quarter: 2, earnings: 16},
        {quarter: 3, earnings: 14},
        {quarter: 4, earnings: 19},
        {quarter: 5, earnings: 41},
        {quarter: 6, earnings: 12},
        {quarter: 7, earnings: 32},
        {quarter: 8, earnings: 13},
        {quarter: 9, earnings: 16},
        {quarter: 10, earnings: 14},
        {quarter: 11, earnings: 19},
        {quarter: 12, earnings: 41},
        {quarter: 13, earnings: 12},
        {quarter: 14, earnings: 32}
    ];

    const handleChange = e => {
        setDays(e.target.value)
    }

    return (
        <div className={classes.analyst}>
            <div className={classes.header}>
                <h3>Аналітика</h3>
                <Select
                    value={days}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Останній день</MenuItem>
                    <MenuItem value={3}>Останні 3 Дні</MenuItem>
                    <MenuItem value={7}>Останні 7 Днів</MenuItem>
                    <MenuItem value={10}>Останні 10 Днів</MenuItem>
                    <MenuItem value={14}>Останні 14 Днів</MenuItem>
                    <MenuItem value={30}>Останні 30 Днів</MenuItem>
                </Select>
            </div>
            <div className={classes.container}>
                <Box className={[classes.mini1, classes.mini]}>
                    <p>Всього звернень</p>
                    <div>
                        <h6>2500</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#11BB8D",strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini2, classes.mini]}>
                    <p>Всього користувачів</p>
                    <div>
                        <h6>450</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#114F95",strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini3, classes.mini]}>
                    <p>Середній вік</p>
                    <div>
                        <h6>40</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#27AE60",strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini4, classes.mini]}>
                    <p>Середній час</p>
                    <div>
                        <h6>45m</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#FBAE38",strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.medium1, classes.medium]}></Box>
                <Box className={[classes.medium2, classes.medium]}></Box>
                <Box className={[classes.medium1, classes.medium]}></Box>
                <Box className={[classes.medium2, classes.medium]}></Box>
            </div>
        </div>
    );
};

export default Analyst;