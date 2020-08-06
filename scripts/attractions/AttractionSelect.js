import {useAttractions, getAttractions} from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionsFilter")

// change event that triggers when user selects different attraction
eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "attractions") {
    const attractionSelectedEvent = new CustomEvent("attractionSelected", {
      detail: {
        attractionId: changeEvent.target.value,
      },
    })
    eventHub.dispatchEvent(attractionSelectedEvent)
  }
})

const render = (attractionsCollection) => {
  contentTarget.innerHTML =
    // maps over the array of attractions and returns option to render one attraction
    `
        <h3>Attractions</h3>
        <select class="dropdown" id="attractions"> 
          <option value="0">Please select an attraction...</option> 
          ${attractionsCollection
            .map((singleAttraction) => {
              return `<option value="${singleAttraction.id}">${singleAttraction.name}</option>`
            })
            .join("")}
  
        </select>
    `
}

export const AttractionSelect = () => {
  getAttractions().then(() => {
    const allAttractions = useAttractions()
    render(allAttractions)
  })
}
