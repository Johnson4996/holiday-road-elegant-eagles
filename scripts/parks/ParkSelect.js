import { getParks, useParks } from "./ParkProvider.js"
import "./ParkList.js"

const contentTarget = document.querySelector(".parkFilter")
const EventHub = document.querySelector(".container")


EventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        const parkSelected = new CustomEvent("parkSelected", {
            detail: {
                parkId: changeEvent.target.value
            }
        })
        EventHub.dispatchEvent(parkSelected)
    }
})



const render = (parksArray) => {
        contentTarget.innerHTML += `
        <h3>Parks</h3>
    <select id="parkSelect">
                <option value="0">Please select a park...</option>
                ${
                    parksArray.map(parkObj => {
                        return `<option value= "${parkObj.parkCode}">${parkObj.fullName}</option>`
                    }).join("")
                }
    </select>
    `
}



export const ParkSelect =() =>{
    getParks()
.then(()=>{
   let allParks =[] 
   allParks = useParks()
    render(allParks)
 })
}