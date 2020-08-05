import { eateryList } from "./eateries/EateryList.js"
import { eaterySelect } from "./eateries/EaterySelect.js"

//import { getEateries, useEateries } from "./eateries/EateryProvider.js"

eaterySelect()
eateryList()


/*const array = getEateries().then(() => {
    const test = useEateries()
    console.log(test)
})
*/
import { useWeather } from "./weather/WeatherProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";


getWeather().then(() => {
    const weatherTest = useWeather()
    console.log(weatherTest)
})