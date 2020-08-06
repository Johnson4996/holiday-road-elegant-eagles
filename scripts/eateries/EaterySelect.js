import { getEateries, useEateries } from "./EateryProvider.js"

const contentTarget = document.querySelector(".eateryFilter")
const eventHub = document.querySelector('.container')

eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "eateries") {
        const eaterySelectedEvent = new CustomEvent("eaterySelected", {
            detail: {
                eateryId: changeEvent.target.value
            }
        })
    eventHub.dispatchEvent(eaterySelectedEvent)
    }
})


const render = (eateries) => {
    let filteredEateries = eateries.filter(eatery => eatery.ameneties.playground === false)
    console.log(filteredEateries)
    contentTarget.innerHTML = `
    <h3>Eateries</h3>
    <select class="dropdown" id="eateries">
        <option value="0">Please select an eatery...</option>
        ${
            filteredEateries.map(
                eatery => {
                        return `<option value="${eatery.id}">${eatery.businessName}</option>`
                }
            ).join()
        }
    </select>
    `
}


export const eaterySelect = () => {
    getEateries().then(() => {
        const allEateries = useEateries()
        render(allEateries)
    })
}