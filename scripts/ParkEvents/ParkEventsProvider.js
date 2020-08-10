import settings from "../Settings.js"

let parkEvents = []

export const useParkEvents = () =>{
    return parkEvents.slice()
}

export const getParkEvents = (parkId) =>{
return fetch(`https://developer.nps.gov/api/v1/events?limit=2&api_key=${settings.npsKey}&parkCode=${parkId}`)
.then(response => response.json())
.then(parsedEvents =>{
    parkEvents = parsedEvents.data
})
}