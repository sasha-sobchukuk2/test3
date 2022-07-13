import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/core";
import {actions, CardItem, getWeather} from "../../redux/main";

import classes from './main.module.css'
import Day from "../Day/day";
import Details from "../details/details";
import Card from "../card/card";

const Main = () => {


    const cards = useSelector((state: AppStateType) => state.Main.cards)
    const dispatch = useDispatch()

    useEffect(() => {
        const geolocationSuccess = (position: GeolocationPosition) => {
            const {longitude, latitude} = position.coords
            dispatch(actions.setCoords({longitude, latitude}))
            // @ts-ignore
            dispatch(getWeather({longitude, latitude}))
        }
        const errorCallback = (error: GeolocationPositionError) => {
            console.log(error.message)
        }
        navigator
            .geolocation
            .getCurrentPosition(geolocationSuccess, errorCallback, {maximumAge: 6000000})
    }, [])


    return (
        <div className={classes.wrapper}>
            <div className={classes.root}>
                <Day/>
                <div className={classes.partContainer}>
                    {cards?.map((cardData:CardItem)=><Card cardData={cardData} />)}
                </div>
                <Details/>
            </div>
        </div>
    );
};

export default Main;

