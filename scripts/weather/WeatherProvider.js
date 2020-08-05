//import { Settings } from "../Settings.js";

let weather = []

export const useWeather = () => {
    return weather.slice()
}
export const getWeather = () => {
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=38.916554&lon=-77.025977&appid=c4b328627e026517ffdfa2177690f12b`)
        .then(response => response.json())
        .then(() => {
            weatherData => {
                weather = weatherData
            }
        })
}