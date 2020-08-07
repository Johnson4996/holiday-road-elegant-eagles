import {getItineraries,useItineraries} from './ItineraryProvider.js'
import {itineraryHTMLConverter} from './Itinerary.js'


const contentTarget = document.querySelector(".plannedItinerary")
const eventHub = document.querySelector(".container")

const render = (itineraries) => {
    contentTarget.innerHTML = itineraries.map(
        (itineraryObj) => {
            return itineraryHTMLConverter(itineraryObj)
        }
    ).join("")
}

export const itineraryList = () => {
    getItineraries()
        .then(useItineraries)
        .then(render)
}

eventHub.addEventListener("planStateChanged", () => {
    const newPlans = useItineraries()
    render(newPlans)
})