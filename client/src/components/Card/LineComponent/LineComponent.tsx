import React from 'react';
import {CardName} from "../../../redux/main";
import classes from './LineComponent.module.css'

type LeftPartProps = {
    name: CardName
}
const LineComponent: React.FC<LeftPartProps> = ({name}) => {
    const lastPosition: boolean = name === "Night"

    return (
        <div className={classes.container}>
            <div className={classes.dot}/>
            <div className={`${classes.line} ${lastPosition ? classes.lastPosition : null}`}/>
        </div>
    );
};

export default LineComponent;
