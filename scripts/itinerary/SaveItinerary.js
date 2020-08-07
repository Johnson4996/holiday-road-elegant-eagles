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

        const attractionChosenArray = document.querySelectorAll(".attractionName")
        const parkChosen = document.querySelector(".parkName").innerHTML
        const eateryChosen = document.querySelector(".eateryName").innerHTML
         

        let attractionArray = attractionChosen.map(attraction => {
            return attraction.innerHTML
    })
        console.log(attractionArray)

        const newItinerary = {
            park: parkChosen,
            attraction: attractionChosenArray,
            eatery: eateryChosen
        }

    saveItinerary(newItinerary)
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
    attractionChosenArray.push(attractionChosen)
  const arrayOfAttractions = useAttractions()
  const attractionObj = arrayOfAttractions.find((attraction) => {
    return parseInt(attractionChosen) === attraction.id
  })
  renderAttraction(attractionObj)
})






const renderEatery = (eateryObject) => {
  contentTargetEateries.innerHTML += `
    <div class="previewContent" id="previewEatery--${eateryObject.id}">
    ${eateryHTMLConverter(eateryObject)}
    </div>`
}

eventHub.addEventListener("eaterySelected", (eaterySelectedEvent) => {
  const eateryChosen = eaterySelectedEvent.detail.eateryId
    eateriesChosenArray.push(eateryChosen)
  const arrayOfEateries = useEateries()
  const foundEateryObj = arrayOfEateries.find((eatery) => {
    return parseInt(eateryChosen) === eatery.id
  })
  renderEatery(foundEateryObj)
})