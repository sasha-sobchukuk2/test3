import React, {FC} from 'react';// @ts-ignore
import classes from "./card.module.css"
import LeftPart from "./line/leftPart";
import Image from "./Image";
import {CardItem} from "../../redux/main";

type CardType ={
    cardData:CardItem
}

const Card:FC<CardType> = ({cardData}) => {

    return (
        <div className={classes.root}>
            <LeftPart  name={cardData.name}/>

            <div className={classes.imgContainer}>
                <Image iconName={cardData.icon}/>
                <div className={classes.imgText}>
                    {cardData.name}
                </div>
            </div>

            <div className={classes.text}>
                <span className={classes.grad}>{cardData.middleTemperature} &#176;</span><br/>
                <span className={classes.describe}>{cardData.description}</span>
            </div>

        </div>
    );
};

export default Card;