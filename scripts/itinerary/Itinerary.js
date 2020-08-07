export const itineraryHTMLConverter = (itineraryObj) => {
    return `
        <section class="plan">
            <div class="dialogTitle">Park: </div>
            <div class="dialogContent">${itineraryObj.park}</div>
            <div class="dialogTitle">Attraction: </div>
            <div class="dialogContent">${itineraryObj.attraction}</div>
            <div class="dialogTitle">Eatery: </div>
            <div class="dialogContent">${itineraryObj.eatery}</div>
        </section>
    `
}