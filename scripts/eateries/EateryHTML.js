const eventHub = document.querySelector(".container")

export const eateryHTMLConverter = (eateryObject) => {
    return `
        <div>
            <button id="closeHeader--${eateryObj.id}}">X</button>
            <h4>${eateryObject.businessName}</h4>
        </div>
        <button id="detailButton--${eateryObject.id}">Details</button>
        <dialog class="eatery--${eateryObject.id}">
            <button id="closeWindow">X</button>
            <div class="description">Description: ${eateryObject.description}</div>
            <div class="location">Location: ${eateryObject.city}, ${eateryObject.state}</div>
        </dialog>
    `
}

//what it will look like in the preview window

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("closeHeader--")) {
        console.log("test")
        // const attractionDeletedEvent = new CustomEvent("attractionDeleted", {
          const contentTarget = document.querySelector(`.previewContent`) 
          contentTarget.innerHTML = contentTarget.remove()
        // }
    }
})