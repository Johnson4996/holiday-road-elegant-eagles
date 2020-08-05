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
    contentTarget.innerHTML = `
    <select class="dropdown" id="eateries">
        <option value="0">Please select an eatery...</option>
        ${
            eateries.map(
                eatery => {
                    return `<option value="${eatery.businessName}">${eatery.businessName}</option>`
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