// import {removeElement} from "./AttractionList.js"
const eventHub = document.querySelector(".container")

export const AttractionHTMLConverter = (attractionObj) => {
  return `
         <div id="divHeader">
            <button id="closeButtonAttraction--${attractionObj.id}">X</button>
            <h4 class="attractionName"id="header--${attractionObj.id}">${attractionObj.name}</h4>
        </div>
        <button class="details" id="detailButton--${attractionObj.id}">Details</button>
        <dialog id="attractionDialog--${attractionObj.id}" class="attraction--${attractionObj.id}">
            <div  class="wrapper">
            <a id="closeWindow--${attractionObj.id}" href="#" class="close-button">
                <div class="in">
                <div id="close-button-block2--${attractionObj.id}" class="close-button-block2"></div>
                <div id="close-button-block2--${attractionObj.id}" class="close-button-block2"></div>
        </div>
            <div  class="out">
                <div id="close-button-block2--${attractionObj.id}" class="close-button-block2"></div>
                <div id="close-button-block2--${attractionObj.id}" class="close-button-block2"></div>
            </div>
            </a>
        </div>
            <div class="dialogTitle">Description: </div>
            <div class="dialogContent">${attractionObj.description}</div>
            <div class="dialogTitle">Location: </div>
            <div class="dialogContent">${attractionObj.city}, ${attractionObj.state}</div>
        </dialog>
    `
}

// this is the click event for all of the removal buttons in content preview

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("closeButtonAttraction--")) {
        // console.log("test")
          const [closeButton, id] = clickEvent.target.id.split("--")
          const contentTarget = document.querySelector(`#previewAttraction--${id}`) 
          contentTarget.innerHTML = contentTarget.remove()
    }
    })

        // could try the delete method to fix api bug
        // fetch(‘https://jsonplaceholder.typicode.com/todos/1', {
        // method: ‘DELETE’