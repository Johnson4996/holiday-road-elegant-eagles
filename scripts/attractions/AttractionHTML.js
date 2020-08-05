export const AttractionHTMLConverter = (attractionObj) => {
  return `
        <h3>Attractions</h3>
        <div>
            <h4>${attractionObj.name}</h4>
        </div>
        <button id="detailButton--${attractionObj.id}">Details</button>
        <dialog>
            <div class="description">${attractionObj.description}</div>
            <div class="location">${attractionObj.city}, ${attractionObj.state}</div>
            <button id="closeAttractionDialogButton">Close</button>
        </dialog>
    `
}

// Will potentially add a default attraction function so preview will not be empty

// export const defaultAttraction = () => {
//   return `

//     `
// }
