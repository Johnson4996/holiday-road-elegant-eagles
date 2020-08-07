import {getAttractions, useAttractions} from "./AttractionProvider.js"
import {AttractionHTMLConverter} from "./AttractionHTML.js"
import {showAttractionDetails} from "./AttractionDialogButton.js"

const contentTarget = document.querySelector(".attractions")
const eventHub = document.querySelector(".container")

// attraction selected event, when user selects an attraction the event renders the attraction to preview
eventHub.addEventListener("attractionSelected", (attractionSelectedEvent) => {
  const attractionChosen = attractionSelectedEvent.detail.attractionId
  const arrayOfAttractions = useAttractions()
  const attractionObj = arrayOfAttractions.find((attraction) => {
    return parseInt(attractionChosen) === attraction.id
  })
  render(attractionObj)
})

const render = (attractionObj) => {
  contentTarget.innerHTML += `
    <div class="previewContent" id="previewAttraction--${attractionObj.id}">
        ${AttractionHTMLConverter(attractionObj)}
    </div>`
}

export const AttractionList = () => {
  getAttractions().then(showAttractionDetails)
}
