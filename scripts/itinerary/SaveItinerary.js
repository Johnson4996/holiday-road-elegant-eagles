import { saveItinerary } from './ItineraryProvider.js'
import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";
import {eateryHTMLConverter} from "../eateries/EateryHTML.js"
import { AttractionHTMLConverter } from "../attractions/AttractionHTML.js";

const eventHub = document.querySelector(".container")
const contentTargetEateries = document.querySelector(".eateries")
const contentTargetAttractions = document.querySelector(".attractions")

//const contentTarget = document.querySelector(".plannedItinerary")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary"){

        // const attractionChosenArray = document.querySelectorAll(".attractionName")
        const parkChosen = document.querySelector(".parkName").innerHTML
        // const eateryChosen = document.querySelector(".eateryName").innerHTML
        //  attractionChosenArray
        // array contains ids of attractions, need to translate those to names

    //     let attractionArray = attractionChosen.map(attraction => {
    //         return attraction.innerHTML
    // })
    //     console.log(attractionArray)

        const newItinerary = {
            park: parkChosen,
            attraction: attractionChosenArray,
            eatery: eateriesChosenArray
        }

    saveItinerary(newItinerary)
    console.log(attractionChosenArray)
    }
})

let attractionChosenArray = []
let eateriesChosenArray = []



const renderAttraction = (attractionObj) => {
  contentTargetAttractions.innerHTML += `
    <div class="previewContent" id="previewAttraction--${attractionObj.id}">
        ${AttractionHTMLConverter(attractionObj)}
    </div>`
}

eventHub.addEventListener("attractionSelected", (attractionSelectedEvent) => {
  const attractionChosen = attractionSelectedEvent.detail.attractionId
  const arrayOfAttractions = useAttractions()
  const attractionObj = arrayOfAttractions.find((attraction) => {
    return parseInt(attractionChosen) === attraction.id
  })
  renderAttraction(attractionObj)
  attractionChosenArray.push(attractionObj)
  console.log(attractionChosenArray)
})

// 




const renderEatery = (eateryObject) => {
  contentTargetEateries.innerHTML += `
    <div class="previewContent" id="previewEatery--${eateryObject.id}">
    ${eateryHTMLConverter(eateryObject)}
    </div>`
}

eventHub.addEventListener("eaterySelected", (eaterySelectedEvent) => {
  const eateryChosen = eaterySelectedEvent.detail.eateryId
  const arrayOfEateries = useEateries()
  const foundEateryObj = arrayOfEateries.find((eatery) => {
    return parseInt(eateryChosen) === eatery.id
  })
  renderEatery(foundEateryObj)
  eateriesChosenArray.push(foundEateryObj)
  console.log(eateriesChosenArray)
})