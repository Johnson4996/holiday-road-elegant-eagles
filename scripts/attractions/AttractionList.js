import {getAttractions, useAttractions} from "./AttractionProvider.js"
import {AttractionHTMLConverter} from "./AttractionHTML.js"
import {showAttractionDetails} from "./AttractionDialogButton.js"

const contentTarget = document.querySelector(".attractions")

// attraction selected event, when user selects an attraction the event renders the attraction to preview


const render = (attractionObj) => {
  contentTarget.innerHTML += `
    <div class="previewContent" id="previewAttraction--${attractionObj.id}">
        ${AttractionHTMLConverter(attractionObj)}
    </div>`
}

export const AttractionList = () => {
  getAttractions().then(showAttractionDetails)
}
