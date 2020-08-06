const eventHub = document.querySelector(".container")

export const parkHTML = (parkObj) => {
    return `
    <div>
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

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton--park") {
        // console.log("test")
          const contentTarget = document.querySelector(`#previewPark`) 
          contentTarget.innerHTML = contentTarget.remove()
    }
})