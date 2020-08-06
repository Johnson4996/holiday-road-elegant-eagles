import {useEateries, getEateries} from "./EateryProvider.js"
import {eateryHTMLConverter} from "./EateryHTML.js"
import {showEateryDetails} from "./EateryDetails.js"

const contentTarget = document.querySelector(".eateries")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eaterySelected", (eaterySelectedEvent) => {
  const eateryChosen = eaterySelectedEvent.detail.eateryId
  const arrayOfEateries = useEateries()
  const foundEateryObj = arrayOfEateries.find((eatery) => {
    return parseInt(eateryChosen) === eatery.id
  })
  render(foundEateryObj)
})

const render = (eateryObject) => {
  contentTarget.innerHTML += `
    <div class="previewContent">
    ${eateryHTMLConverter(eateryObject)}
    </div>`
}

export const eateryList = () => {
  getEateries().then(showEateryDetails)
}
