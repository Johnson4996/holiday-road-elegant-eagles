const eventHub = document.querySelector(".container")

export const parkHTML = (parkObj) => {
    return `
    <div>
    <h4 class="parkName">${parkObj.fullName}</h4>
</div>
<button class="parkDetail" id="parkDetailButton--${parkObj.parkCode}">Details</button>
<dialog id ="parksDialog" class="park--${parkObj.parkCode}">
        <div class="wrapper">
        <a id="closeWindow" href="#" class="close-button">
            <div class="in">
            <div class="close-button-block1"></div>
            <div class="close-button-block1"></div>
        </div>
        <div  class="out">
        <div class="close-button-block1"></div>
        <div class="close-button-block1"></div>
        </div>
        </a>
        </div>
    <div class="dialogTitle">Description: </div>
    <div class="dialogContent">${parkObj.description}</div>
    <div class="dialogTitle">Location: </div>
    <div class="dialogContent">${parkObj.addresses[0].city}, ${parkObj.addresses[0].stateCode}</div>
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