import {getAttractions, useAttractions} from "./AttractionProvider.js"
import {AttractionHTMLConverter} from "./AttractionHTML.js"

const contentTarget = document.querySelector(".attractions")

const clearAttractionsList = () => (contentTarget.innerHTML = "")
let attractionSelectionArray = []

const render = (arrayOfAttractions) => {
  // console.log("CriminalList: Rendered to DOM")
  let attractionHTML = ""

  arrayOfAttractions.forEach((attraction) => {
    attractionHTML += AttractionHTMLConverter(attraction)
  })

  contentTarget.innerHTML = `
        <h3>Attractions</h3>
        <div class="previewContent">
            ${attractionHTML}
        </div>
    `
}
// ${ AssociatesDialog() }

export const AttractionList = () => {
  getAttractions().then(() => {
    const attraction = useAttractions()
    render(attraction)
  })
}
