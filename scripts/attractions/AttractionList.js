import {getAttractions} from "./AttractionProvider.js"
import {showAttractionDetails} from "./AttractionDialogButton.js"
// attraction selected event, when user selects an attraction the event renders the attraction to preview



export const AttractionList = () => {
  getAttractions().then(showAttractionDetails)
}
