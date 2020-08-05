import {useEateries, getEateries} from "./EateryProvider.js"
import {eateryHTMLConverter} from "./EateryHTML.js"

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

const render = (arrayOfEateries) => {
  let eateryHTML = ""
  arrayOfEateries.forEach((eatery) => {
    eateryHTML = eateryHTMLConverter(eatery)
  })
  contentTarget.innerHTML = `
    <h3>Eatery:</h3>
    <div class="previewContent">
    ${eateryHTML}
    </div>`
}

export const eateryList = () => {
  getEateries().then(() => {
    const eateryArray = useEateries()
    render(eateryArray)
  })
}
