let itineraries = []

const eventHub = document.querySelector(".container")

const dispatchPlanChangeEvent = () => {
    const planStateChangedEvent = new CustomEvent("planStateChanged")

    eventHub.dispatchEvent(planStateChangedEvent)
}

export const saveItinerary = (itinerary) => {
    const jsonItinerary = JSON.stringify(itinerary)

    return fetch('http://localhost:3000/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonItinerary
    })
    .then(getItineraries)
    .then(dispatchPlanChangeEvent)
}


export const useItineraries = () => {
    return itineraries.slice()

}

export const getItineraries = () => {
    return fetch('http://localhost:3000/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}