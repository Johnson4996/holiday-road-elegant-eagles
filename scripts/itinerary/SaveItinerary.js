import {saveItinerary} from './ItineraryProvider.js'

const eventHub = document.querySelector(".container")
//const contentTarget = document.querySelector(".plannedItinerary")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary"){

        

        const parkChosen = document.querySelector(".parkName").innerHTML
        const eateryChosen = document.querySelector(".eateryName").innerHTML
         

        let attractionArray = attractionChosen.map(attraction => {
            return attraction.innerHTML
    })
        console.log(attractionArray)

        const newItinerary = {
            park: parkChosen,
            attraction: attractionArray,
            eatery: eateryChosen
        }

    saveItinerary(newItinerary)
    }
})

let attractionChosenArray = []
let eateriesChosenArray = []

eventHub.addEventListener("attractionSelected", (attractionSelectedEvent) => {
  const attractionChosen = attractionSelectedEvent.detail.attractionId
    attractionChosenArray.push(attractionChosen)
  const arrayOfAttractions = useAttractions()
  const attractionObj = arrayOfAttractions.find((attraction) => {
    return parseInt(attractionChosen) === attraction.id
  })
  render(attractionObj)
})

eventHub.addEventListener("eaterySelected", (eaterySelectedEvent) => {
  const eateryChosen = eaterySelectedEvent.detail.eateryId
    eateriesChosenArray.push(eateriesChosen)
  const arrayOfEateries = useEateries()
  const foundEateryObj = arrayOfEateries.find((eatery) => {
    return parseInt(eateryChosen) === eatery.id
  })
  render(foundEateryObj)
})