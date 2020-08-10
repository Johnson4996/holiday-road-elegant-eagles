import { useAttractions } from "../attractions/AttractionProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useParks } from "../parks/ParkProvider.js";

const eventhub = document.querySelector(".container")
const contentTarget = document.querySelector("#divHeader")

eventhub.addEventListener("keyup", keyupEvent => {
    const searchString = keyupEvent.target.value
    const filteredAttractions = useAttractions().filter(attraction => {
        return attraction.name.toLowerCase().includes(searchString)
    })
    const filteredEateries = useEateries().filter(eatery => {
        return eatery.businessName.toLowerCase().includes(searchString)    
    })
    const filteredParks = useParks().filter(park => {
        return park.fullName.toLowerCase().includes(searchString)
    })
    renderAttraction(filteredAttractions)
    console.log(filteredAttractions)
})


// What would search bar HTML look like?

// <input type="text" placeholder="Search..">

const renderAttraction = (attractionObj) =>{
contentTarget.innerHTML = `
    <h4 class="attractionName"id="header--${attractionObj.id}">${attractionObj.name}</h4>
`
}