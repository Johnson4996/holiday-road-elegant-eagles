export const itineraryHTMLConverter = (itineraryObj) => {
    return `
        <section class="plan">
            <div class="dialogTitle">Park: </div>
            <div class="dialogContent">${itineraryObj.park}</div>
            <div class="dialogTitle">Attraction: </div>
            ${itineraryObj.attraction.map(attractionObj => {
                return `<div class="dialogContent">${attractionObj.name}</div>`
            }).join("")}
            <div class="dialogTitle">Eatery: </div>
            ${itineraryObj.eatery.map(eateryObj => {
                return `<div class="dialogContent">${eateryObj.businessName}</div>`
            }).join("")}
        </section>
    `
}