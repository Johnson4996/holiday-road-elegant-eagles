import {useAttractions, getAttractions} from "./AttractionProvider.js"

const render = (attractionsCollection, unfilteredCollection) => {
  contentTarget.innerHTML =
    // sets value of Please select attraction to zero then maps over the array of attractions and returns option to render one attraction
    `
        <select class="dropdown" id="attractions"> 
            <option value="0">Attractions Near Your Park</option>  
        ${attractionsCollection
          .map((singleAttraction) => {
            return `<option value="${singleAttraction.id}" class="selectOption">${singleAttraction.name}</option>`
          })
          .join("")}
          <option value="0"></option> 
          <option value="0">All Attractions</option> 
          ${unfilteredCollection
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
