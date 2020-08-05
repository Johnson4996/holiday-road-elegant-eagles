import {useAttractions, getAttractions} from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionsFilter")
const attractionDropdown = document.getElementById("attractions")

const render = (attractionsCollection) => {
  contentTarget.innerHTML =
    // sets value of Please select attraction to zero then maps over the array of attractions and returns option to render one attraction
    `
        <select class="dropdown" id="attractions"> 
          <option value="0">All Attractions</option> 
          ${attractionsCollection
            .map((singleAttraction) => {
              return `<option value="${singleAttraction.id}" class="selectOption">${singleAttraction.name}</option>`
            })
            .join("")}
  
        </select>
    `
}

contentTarget.addEventListener("change", (event) => {
  if (event.target.id === "attractions") {
    let chosenAttraction = event.target.value
    if (chosenAttraction === "0") {
      return false
    } else {
      let attractionChosenEvent = new CustomEvent("attractionChosenEvent", {
        detail: {
          attraction: chosenAttraction,
        },
      })
      eventHub.dispatchEvent(attractionChosenEvent)
    }
  }
})

export const AttractionSelect = () => {
  getAttractions().then(() => {
    const allAttractions = useAttractions()
    render(allAttractions)
  })
}
