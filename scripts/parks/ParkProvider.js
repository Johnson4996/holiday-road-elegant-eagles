import settings from "../Settings.js"

let parks = []

export const useParks = () => {

    return parks.slice()
}

export const getParks = () =>{
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=10&api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(parsedParks =>{
        parks = parsedParks.data
    })
}