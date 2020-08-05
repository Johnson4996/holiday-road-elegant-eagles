import {AttractionList} from "./attractions/AttractionList.js"
import {AttractionSelect} from "./attractions/AttractionSelect.js"

import {eateryList} from "./eateries/EateryList.js"
import {eaterySelect} from "./eateries/EaterySelect.js"

//import { getEateries, useEateries } from "./eateries/EateryProvider.js"

AttractionList()
AttractionSelect()
eaterySelect()
eateryList()

/*const array = getEateries().then(() => {
    const test = useEateries()
    console.log(test)
})
*/
