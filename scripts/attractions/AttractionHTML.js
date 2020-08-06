// import {removeElement} from "./AttractionList.js"
const eventHub = document.querySelector(".container")

export const AttractionHTMLConverter = (attractionObj) => {
  return `
         <div id="divHeader">
            <button id="closeButton--${attractionObj.id}}">X</button>
            <h4 class="selectElement"id="header--${attractionObj.id}">${attractionObj.name}</h4>
        </div>
        <button id="detailButton--${attractionObj.id}">Details</button>
        <dialog class="attraction--${attractionObj.id}">
            <button id="closeWindow">X</button>
            <div class="description">Description: ${attractionObj.description}</div>
             <div class="location">Location: ${attractionObj.city}, ${attractionObj.state}</div>
        </dialog>
    `
}

// this is the click event for all of the removal buttons in content preview

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("closeButton--")) {
        // console.log("test")
          const contentTarget = document.querySelector(`.previewContent`) 
          contentTarget.innerHTML = contentTarget.remove()
    }
})