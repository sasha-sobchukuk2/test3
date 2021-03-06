import React, {FC, useMemo} from "react";
import classes from "./Card.module.css";
import {IconNames} from "../../redux/main";
import defaultImage from "../../assets/wetherIcons/default.png";
import d1 from "../../assets/wetherIcons/dayIcons/d1.png";
import d2 from "../../assets/wetherIcons/dayIcons/d2.png";

import d3 from "../../assets/wetherIcons/dayIcons/d3.png";
import d9 from "../../assets/wetherIcons/dayIcons/d9.png";
import d11 from "../../assets/wetherIcons/dayIcons/d11.png";
import d4 from "../../assets/wetherIcons/dayIcons/d4.png";
import n1 from "../../assets/wetherIcons/nightIcon/n1.png";
import n2 from "../../assets/wetherIcons/nightIcon/n2.png";
import n10 from "../../assets/wetherIcons/nightIcon/n10.png";


type ImageProps = {
    iconName: IconNames
}
const Image: FC<ImageProps> = ({iconName}) => {
    const image = useMemo(() => {
        switch (iconName) {
            case "01d":
                return d1
            case "02d":
                return d2
            case "03d":
                return d3
            case "09d":
                return d9
            case "11d":
                return d11
            case "04d":
                return d4

            case "01n":
                return n1
            case "02n":
                return n2
            case "10n":
                return n10
            case "03n":
                return d3
            default:
                return defaultImage
        }
    }, [iconName])
    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src={image || defaultImage} alt='text'/>
        </div>
    )
}

export default Image
