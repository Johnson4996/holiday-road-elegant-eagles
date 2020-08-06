import { useParks } from "./ParkProvider.js"
import { parkHTML } from "./ParkHTML.js"




const contentTarget = document.querySelector(".park")
const EventHub = document.querySelector(".container")


EventHub.addEventListener("parkSelected", ParkSelected =>{
   const allParks = useParks()
   const  parkChosen = ParkSelected.detail.parkId
    const foundPark = allParks.find(park =>{
        return park.parkCode === parkChosen
    })
    
    render(foundPark)
}
)

EventHub.addEventListener("click", detailsClicked =>{
        if(detailsClicked.target.id.startsWith("parkDetailButton--")) {
            const buttonId = detailsClicked.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.park--${buttonId}`)
            contentTarget.showModal()
        }
        else if(detailsClicked.target.id === "closeWindow") {
            const theDialog = detailsClicked.target.parentNode
            theDialog.close()
        }
})





const render = (parkObj) =>{
contentTarget.innerHTML = `
<h3>Park:</h3>
    <div class="previewContent" id="previewPark">
    ${
        parkHTML(parkObj)
    }
    </div>`
}









