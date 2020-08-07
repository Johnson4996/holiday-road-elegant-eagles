export const AttractionHTMLConverter = (attractionObj) => {
  return `
        <div>
            <h4 class="attractionName">${attractionObj.name}</h4>
        </div>
        <button id="detailButton--${attractionObj.id}">Details</button>
        <dialog id="attractionDialog" class="attraction--${attractionObj.id}">
        <div  class="wrapper">
        <a id="closeWindow" href="#" class="close-button">
            <div class="in">
            <div class="close-button-block2"></div>
            <div class="close-button-block2"></div>
    </div>
    <div  class="out">
        <div class="close-button-block2"></div>
        <div class="close-button-block2"></div>
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

// Will potentially add a default attraction function so preview will not be empty

// export const defaultAttraction = () => {
//   return `

//     `
// }
