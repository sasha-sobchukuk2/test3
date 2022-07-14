import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/core";

import Detail from "./Detail";
import classes from './Details.module.css'
import wing from '../../assets/details/wing.png'
import sun from '../../assets/details/sun.png'
import arrow from '../../assets/details/arrow.png'
import water from '../../assets/details/water.png'

const Details:FC = () => {
    const details = useSelector((state: AppStateType) => state.Main.details)

    return !details
        ? null :
        (
            <>
                <div className={classes.title}>
                    Today Details
                </div>
                <div className={classes.itemsWrapper}>
                    <Detail name='Wind' data={`E ${details.wind} kmh`} image={wing}/>
                    <Detail name='Humidity' data={details.humidity+'%'} image={water}/>
                    <Detail name='UV Index' data={details.UVIndex.toString()} image={sun}/>
                    <Detail name='Pressure' data={details.pressure+' hPa'} image={arrow}/>

                </div>
            </>
        );
};

export default Details;



