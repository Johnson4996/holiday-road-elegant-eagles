import settings from "../Settings.js"
import { useParks } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".container")

let weather = []

eventHub.addEventListener("parkSelected", (parkSelected) => {
    const parkChosen = parkSelected.detail.parkId
    const allTheParks = useParks()
    const currentChosenPark = allTheParks.find(park => {
        return park.parkCode === parkChosen
    })
    getWeather(currentChosenPark)
})

export const useWeather = () => {
    return weather.slice()
}
export const getWeather = (parkObject) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${parkObject.latitude}&lon=${parkObject.longitude}&exclude=minutely,hourly,current&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(weatherData => {
            weather = weatherData.daily
        })
}