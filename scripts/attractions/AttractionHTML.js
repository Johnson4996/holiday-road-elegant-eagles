// import {removeElement} from "./AttractionList.js"
const eventHub = document.querySelector(".container")

export const AttractionHTMLConverter = (attractionObj) => {
  return `
         <div id="divHeader">
            <button value="divHeader" id="closeHeader--${attractionObj.id}}">X</button>
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

// const removeElement = () => {
//   const elem = document.getElementById(`divHeader`)
//   elem.remove()
// }

// Stack Overflow function that moves element

// const removeElement = (attractionObj) => {
//     var elem = document.getElementById(`header--${attractionObj.id}`);
//     elem.parentNode.removeChild(elem);
//     return false;
// }

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("closeHeader--")) {
        console.log("test")
        // const attractionDeletedEvent = new CustomEvent("attractionDeleted", {
          const contentTarget = document.querySelector(`.previewContent`) 
          contentTarget.innerHTML = contentTarget.remove()
        // }
    }
})