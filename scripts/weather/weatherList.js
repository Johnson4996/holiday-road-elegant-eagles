import { weatherHTML } from "./weatherHTML.js"
import { useWeather } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".weather") //or ".previewContent"

export const weatherList = () => {
    contentTarget.innerHTML = `
        <h4>Your 5 day Forecast</h4>
    `
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

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton--park") {
        // console.log("test")
          const contentTarget = document.querySelector(`#previewWeather`) 
          contentTarget.innerHTML = contentTarget.remove()
    }
})

