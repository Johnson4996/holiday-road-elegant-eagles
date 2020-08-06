import { AttractionList } from "./attractions/AttractionList.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import { eateryList } from "./eateries/EateryList.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { ParkSelect } from "./parks/ParkSelect.js"
import './weather/WeatherProvider.js'
//import { getEateries, useEateries } from "./eateries/EateryProvider.js"

//import { getEateries, useEateries } from "./eateries/EateryProvider.js"
AttractionList()
AttractionSelect()
eateryList()
eaterySelect()
ParkSelect()

/*const array = getEateries().then(() => {
    const test = useEateries()
    console.log(test)
})
*/


import { useWeather } from "./weather/WeatherProvider.js";



const weatherTest = useWeather()
console.log(weatherTest)