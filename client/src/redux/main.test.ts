import MainReducer, {actions, CardItem, Coords, Details, InitMainState} from "./main";
import {City, WeatherData} from "../api/api/apiTypes";

let state: InitMainState;

beforeEach(()=>{
    state = {
        coords: null as Coords | null,
        weatherData: null as null | WeatherData[],
        city: null as null | City,
        cards: null as null | CardItem[],
        details: null as null | Details
    }
})
test('set coords test', () => {

    const myNumber = Math.random()
    const newState = MainReducer(state,actions.setCoords({longitude:myNumber,latitude:myNumber}))
    expect(newState.coords?.longitude).toBe(myNumber)
    expect(newState.coords?.latitude).toBe(myNumber)
})

test('set details', () => {

    const myNumber = Math.random()
    const newState = MainReducer(state,actions.setDetails(
        {
            pressure:myNumber,
            UVIndex:myNumber,
            humidity:myNumber,
            wind:myNumber
        })
    )
    expect(newState.details?.pressure).toBe(myNumber)
    expect(newState.details?.wind).toBe(myNumber)
    expect(newState.details?.humidity).toBe(myNumber)
    expect(newState.details?.UVIndex).toBe(myNumber)
})

test('set City', () => {

    const myNumber = Math.random()
    const newState = MainReducer(state,actions.setCity({
        id:myNumber,
        name:myNumber.toString(),
        coord:{lat:myNumber,lon:myNumber},
        sunrise:myNumber,
        sunset:myNumber,
        timezone:myNumber,
        population:myNumber
        })
    )
    expect(newState.city).not.toBe(null)
    expect(newState.city?.name).toBe(myNumber.toString())

})