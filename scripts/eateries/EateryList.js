import {getEateries} from "./EateryProvider.js"
import {showEateryDetails} from "./EateryDetails.js"

export const eateryList = () => {
  getEateries().then(showEateryDetails)
}
