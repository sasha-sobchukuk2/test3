import React, {FC} from 'react';
import classes from "./Card.module.css"
import PhotoPart from "./LineComponent/LineComponent";
import Image from "./Image";
import {CardItem} from "../../redux/main";

type CardType ={
    cardData:CardItem
}

const Card:FC<CardType> = ({cardData}) => {

    return (
        <div className={classes.root}>
            <PhotoPart name={cardData.name}/>

            <div className={classes.imgContainer}>
                <Image iconName={cardData.icon}/>
                <div className={classes.imgText}>
                    {cardData.name}
                </div>
            </div>

            <div style={{backgroundColor:cardData.color}} className={classes.text}>
                <span className={classes.temp}>{cardData.middleTemperature} &#176;</span><br/>
                <span className={classes.describe}>{cardData.description}</span>
            </div>

        </div>
    );
};

export default Card;