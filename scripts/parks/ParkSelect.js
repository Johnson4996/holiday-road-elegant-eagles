import { getParks, useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector(".parkFilter")
const EventHub = document.querySelector(".container")


const render = (parksArray) =>{
    contentTarget.innerHTML += `
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