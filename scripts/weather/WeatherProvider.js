import settings from "../Settings.js"
import { useParks } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".container")

let weather = []

eventHub.addEventListener("parkSelected", (parkSelected) => {
    const parkChosen = parkSelected.detail.parkId
    console.log("THIS IS GRABING PARK CODE", parkChosen)
    const allTheParks = useParks()
    console.log(allTheParks)
    const currentChosenPark = allTheParks.find(park => {
        return park.parkCode === parkChosen
    })
    console.log(currentChosenPark)
})

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