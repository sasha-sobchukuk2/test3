import axios from "axios";
import {ApiWeatherResponse} from "./apiTypes";

export const API_TOCEN = "21b6660b26d660183c10c5b12fcbc05e"


export type getWeatherReq = {
    longitude: number,
    latitude: number,
}
export const getWeatherApi = {
    getWeather({longitude, latitude}: getWeatherReq): Promise<any> {
        return axios.get<ApiWeatherResponse>
        (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_TOCEN}`)
            .then((res) => res.data)

    }
}

