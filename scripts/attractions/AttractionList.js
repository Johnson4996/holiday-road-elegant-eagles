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

const render = (attractionArray) => {
  let attractionHTML = ""

  attractionArray.forEach((attraction) => {
    attractionHTML = AttractionHTMLConverter(attraction)
  })
  contentTarget.innerHTML = `
    <h3>Attraction:</h3>
    <div class="previewContent">
        ${attractionHTML}
    </div>`
}

export const AttractionList = () => {
  getAttractions().then(() => {
    const attractionArray = useAttractions()
    render(attractionArray)
  })
}
