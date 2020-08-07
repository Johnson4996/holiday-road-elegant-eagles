import {saveItinerary} from './ItineraryProvider.js'

const eventHub = document.querySelector(".container")
//const contentTarget = document.querySelector(".plannedItinerary")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary"){

        const parkChosen = document.querySelector(".parkName").innerHTML
        const attractionChosen = document.querySelector(".attractionName").innerHTML
        const eateryChosen = document.querySelector(".eateryName").innerHTML

        const newItinerary = {
            park: parkChosen,
            attraction: attractionChosen,
            eatery: eateryChosen
        }

    saveItinerary(newItinerary)
    }
})