import { useWeather } from "./weather/WeatherProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";


getWeather().then(() => {
    const weatherTest = useWeather()
    console.log(weatherTest)
})