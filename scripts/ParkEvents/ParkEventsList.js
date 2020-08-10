import {
    getParkEvents,
    useParkEvents
} from "./ParkEventsProvider.js"
import "../parks/ParkSelect.js"
import {
    parkEventsHTML
} from "./ParkEventsHTML.js"

const contentTarget = document.querySelector(".plan")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", getParkEvent => {
    const parkId = getParkEvent.detail.parkId
    getParkEvents(parkId)
})

eventHub.addEventListener("parkEventsClicked", clickEvent => {
    const allEvents = useParkEvents()
    let eventsHTMLrep = render(allEvents)
    contentTarget.innerHTML += eventsHTMLrep
    
})

export const render = (events) =>{
   return` <dialog id ="parkEventDialog">
        <div  class="wrapper">
        <a id="closeWindow" href="#" class="close-button">
            <div class="in">
            <div class="close-button-block1"></div>
            <div class="close-button-block1"></div>
        </div>
        <div  class="out">
        <div class="close-button-block1"></div>
        <div class="close-button-block1"></div>
        </div>
        </a>
        </div>
        <div class="infoContiner">
        ${events.forEach(event => {
            parkEventsHTML(event)
        })}
        </div>
        </dialog>`
} 