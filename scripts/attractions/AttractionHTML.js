export const AttractionHTMLConverter = (attractionObj) => {
  return `
        <div>
            <h4>${attractionObj.name}</h4>
        </div>
        <button id="detailButton--${attractionObj.id}">Details</button>
        <dialog class="attraction--${attractionObj.id}">
            <button id="closeWindow">X</button>
            <div class="description">${attractionObj.description}</div>
            <div class="location">${attractionObj.city}, ${attractionObj.state}</div>
        </dialog>
    `
}

// Will potentially add a default attraction function so preview will not be empty

// export const defaultAttraction = () => {
//   return `

//     `
// }
