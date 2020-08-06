import { weatherHTML } from "./weatherHTML.js"
import { useWeather } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".park") //or ".previewContent"

export const weatherList = () => {
    contentTarget.innerHTML += `<h4>Your 5 day Forecast</h4>`
    const weatherArray = useWeather()
    for (let i = 0; i < 5; i++) {
        render(weatherArray[i])
    }
}

const render = (weatherObj) => {
    contentTarget.innerHTML += `
    <article class="weatherForecast">
    ${weatherHTML(weatherObj)}
    </article>
    `
}