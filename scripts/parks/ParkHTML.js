export const parkHTML = (parkObj) => {
    return `
    <div>
    <h4>${parkObj.fullName}</h4>
</div>
<button id="parkDetailButton--${parkObj.parkCode}">Details</button>
<dialog class="park--${parkObj.parkCode}">
    <button id="closeWindow">X</button>
    <div class="dialogTitle">Description: </div>
    <div class="dialogContent">${parkObj.description}</div>
    <div class="dialogTitle">Location: </div>
    <div class="dialogContent">${parkObj.addresses[0].city}, ${parkObj.addresses[0].stateCode}</div>
</dialog>
    `
}
