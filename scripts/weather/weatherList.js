import { weatherHTML } from "./weatherHTML.js"
import { useWeather } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weather") //or ".previewContent"

export const weatherList = () => {
    contentTarget.innerHTML = `<h3 class="weatherForecast">Your 5 day Forecast: </h3z>`
    const weatherArray = useWeather()
    for (let i = 0; i < 5; i++) {
        render(weatherArray[i])
    }
}

const render = (weatherObj) => {
    contentTarget.innerHTML += `
    ${weatherHTML(weatherObj)}

    `
}