import {ApiWeatherResponse, City, WeatherData} from "../api/api/apiTypes";
import {getWeatherApi, getWeatherReq} from "../api/api/api";
import {BaseThunkType, InferActionsTypes} from "./core";


export type Coords = {
    latitude: number
    longitude: number
}

export type  CardName = 'Morning' | 'Afternoon' | 'Evening' | 'Night' | ''
export type  DetailName = 'Wind' | 'Humidity' | 'UV Index' | 'Pressure'

export type Details = {
    wind: number,
    humidity: number,
    UVIndex: number,
    pressure: number
}
export type IconNames =
    | "01d"
    | "02d"
    | "03d"
    | "04d"
    | "09d"
    | "10d"
    | "11d"
    | "13d"
    | "50d"

    | "01n"
    | "02n"
    | "03n"
    | "04n"
    | "09n"
    | "10n"
    | "11n"
    | "13n"
    | "50n"
export type CardItem = Details & {
    name: CardName
    description: string
    middleTemperature: number
    icon:IconNames
    color:string

}

const getMiddleTemperature = (temp: number): number => {
    let data: number | string = 273.15 - temp
    data = Math.floor(data)
    data = data.toString().substr(1)
    data = Number(data)
    return data
}

const  makeCardPayload =(data: WeatherData[]): CardItem[]=> {
    const cardArray = [data[0], data[1], data[2], data[3]]
    const cardItems: CardItem[] = cardArray.map((item) => {
        return {
            name: '',
            middleTemperature: getMiddleTemperature(item.main.temp),
            description: item.weather[0].description,
            humidity: item.main.humidity,
            UVIndex: 100 - Number(item.clouds),
            pressure: item.main.pressure,
            wind: item.wind.speed,
            icon:item.weather[0].icon,
            color:'white'
        }
    })

    cardItems[0].name = 'Morning'
    cardItems[1].name = 'Afternoon'
    cardItems[2].name = 'Evening'
    cardItems[3].name = 'Night'

    cardItems[0].color = 'pink'
    cardItems[1].color = 'green'
    cardItems[2].color = 'aqua'
    cardItems[3].color = 'coral'

    return cardItems
}

export const getTimeNow = (): CardName => {
    const hour = new Date().getHours()

    if (hour > 0 && hour < 12) {
        return 'Morning'
    } else if (hour > 12 && hour < 15) {
        return 'Evening'
    } else if (hour > 15 && hour < 18) {
        return 'Evening'
    } else if (hour > 18) {
        return 'Night'
    } else return ''

}


const initState = {
    coords: null as Coords | null,
    weatherData: null as null | WeatherData[],
    city: null as null | City,
    cards: null as null | CardItem[],
    details: null as null | Details
}

export type InitMainState = typeof initState
const MainReducer = (state: InitMainState = initState, action: ActionsType) => {
    switch (action.type) {
        case "SET_COORDS":
            return {...state, coords: action.coords}
        case "SET_WEATHER":
            return {...state, weatherData: action.weatherData}
        case "SET_CITY":
            return {...state, city: action.city}
        case "SET_CARD_DATA":
            return {...state, cards: action.payload}
        case "SET_DETAILS":
            return {...state, details: action.payload}
        default:
            return state
    }
}
export default MainReducer

export const actions = {
    setCoords: (coords: Coords) => ({type: 'SET_COORDS', coords} as const),
    setWeather: (weatherData: WeatherData[]) => ({type: 'SET_WEATHER', weatherData} as const),
    setCity: (city: City) => ({type: 'SET_CITY', city} as const),
    setCardData: (payload: CardItem[]) => ({type: 'SET_CARD_DATA', payload} as const),
    setDetails: (payload: Details) => ({type: 'SET_DETAILS', payload} as const),
}

export const getWeather = (reqData: getWeatherReq): ThunkType =>
    async (dispatch) => {
        let data: ApiWeatherResponse = await getWeatherApi.getWeather(reqData)

        const cards: CardItem[] = makeCardPayload(data.list)

        const hourNow = getTimeNow()

        function getDetails(hourNow: CardName, cards: CardItem[]): Details|undefined {
            const card = cards.find(card => card.name === hourNow)
            if (card) {
                const {name, middleTemperature, description, ...details} = card
                return details
            }
        }

        const details: Details |undefined = getDetails(hourNow, cards)

        if (Number(data.cod) === 200) {
            details && dispatch(actions.setDetails(details))
            dispatch(actions.setCardData(cards))
            dispatch(actions.setWeather(data.list))
            dispatch(actions.setCity(data.city))

        }
    }

type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType>




