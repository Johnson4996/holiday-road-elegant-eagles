import {getAttractions, useAttractions} from "./AttractionProvider.js"
import {AttractionHTMLConverter} from "./AttractionHTML.js"

const contentTarget = document.querySelector(".attractions")
const eventHub = document.querySelector(".container")

const clearAttractionsList = () => (contentTarget.innerHTML = "")

eventHub.addEventListener("attractionSelected", (attractionSelectedEvent) => {
  const attractionChosen = attractionSelectedEvent.detail.attractionId
  const arrayOfAttractions = useAttractions()
  const attractionObj = arrayOfAttractions.find((attraction) => {
    return parseInt(attractionChosen) === attraction.id
  })
  render(attractionObj)
})

const render = (attractionObj) => {
  contentTarget.innerHTML = `
    <h3>Attraction:</h3>
    <div class="previewContent">
        ${AttractionHTMLConverter(attractionObj)}
    </div>`
}

export const AttractionList = () => {
  getAttractions().then(useAttractions).then(render)
}
