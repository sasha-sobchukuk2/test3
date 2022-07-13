import React from 'react';
import classes from './day.module.css'
import Cellular from '../../accets/icons/Cellular Connection.png'
import Wifi from '../../accets/icons/Wifi.png'
import Battery from '../../accets/icons/Battery.png'

const Day = () => {

    let date = new Date()
    const month = new Date().toLocaleString('default', {month: 'long'});

    return (
        <div className={classes.root}>
            <div className={classes.headerBar}>
                <span>{date.getHours()}:{date.getMinutes()}</span>
                <div className={classes.iconContainer}>
                    <img src={Cellular} alt=""/>
                    <img src={Wifi} alt=""/>
                    <img src={Battery} alt=""/>
                </div>

            </div>
            <div className={classes.header}>
                <span className={classes.back}/>
                <span className={classes.tittle}>
                    Tooday
                </span>
            </div>
            <div className={classes.month}>
                {month}{' '}{date.getDay()}

            </div>
        </div>

    );
};

export default Day;