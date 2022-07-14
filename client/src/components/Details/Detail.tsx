import React from 'react';
import {DetailName} from "../../redux/main";
import classes from './Details.module.css'

type ItemProp ={
    name:DetailName
    data:string
    image:string
}


const Detail:React.FC<ItemProp> = ({image,name,data}) => {
    return (
        <div className={classes.itemRoot}>
            <img className={classes.img} src={image} alt=""/>
            <div className={classes.informContainer}>
                <span className={classes.informData}>{data}</span>
                <span className={classes.informName}>{name}</span>
            </div>
        </div>
    );
};

export default Detail;