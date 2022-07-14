import {IconNames} from "../redux/main";

export type City = {
    id:number,
    name:string,
    coord:{
        lat:number,
        lon:number
    }
    population:number,
    sunrise:number,
    sunset:number,
    timezone:number
}

export type WeatherData = {
    dt: number
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: IconNames;
    }];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
    clouds: {
        all: number
    }
    visibility: number
    pop: number
    rain: {
        [prop: string]: number
    }
}
export type ApiWeatherResponse = {
    cod: number,
    message: number,
    cnt: number,
    list: WeatherData[]
    city:City
}
