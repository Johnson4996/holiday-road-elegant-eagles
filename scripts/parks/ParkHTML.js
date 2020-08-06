export const parkHTML = (parkObj) => {
    return `
    <div>
        <button id="closeButton--${parkObj.parkCode}}">X</button>
        <h4>${parkObj.fullName}</h4>
    </div>
    <button id="parkDetailButton--${parkObj.parkCode}">Details</button>
    <dialog class="park--${parkObj.parkCode}">
        <button id="closeWindow">X</button>
        <div class="description">Description: ${parkObj.description}</div>
        <div class="location">Location: ${parkObj.addresses[0].city}, ${parkObj.addresses[0].stateCode}</div>
    </dialog>
    `
}
