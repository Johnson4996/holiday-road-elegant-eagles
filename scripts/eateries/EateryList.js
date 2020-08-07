import {useEateries, getEateries} from "./EateryProvider.js"
import {eateryHTMLConverter} from "./EateryHTML.js"
import {showEateryDetails} from "./EateryDetails.js"

const contentTarget = document.querySelector(".eateries")

const render = (eateryObject) => {
  contentTarget.innerHTML += `
    <div class="previewContent" id="previewEatery--${eateryObject.id}">
    ${eateryHTMLConverter(eateryObject)}
    </div>`
}

export const eateryList = () => {
  getEateries().then(showEateryDetails)
}
