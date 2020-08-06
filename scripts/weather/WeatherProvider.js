import settings from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}
export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=38&lon=-77&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(weatherData => {
            weather = weatherData.list
        })
}