const eventHub = document.querySelector(".container")

export const showAttractionDetails = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("detailButton--")) {
      const buttonId = clickEvent.target.id.split("--")[1]
      const contentTarget = document.querySelector(`.attraction--${buttonId}`)
      contentTarget.showModal()
    } else if (clickEvent.target.id.startsWith("close-button-block2--")) {
      const [closeWindow, id] = clickEvent.target.id.split("--")
      const contentTarget = document.querySelector(`#attractionDialog--${id}`) 
      contentTarget.close()
    }
  })
}


// export const showAttractionDetails = () => {
//     eventHub.addEventListener("click", clickEvent => {
//     clickEvent.target.id.startsWith("detailButton--") 
//     const buttonId = clickEvent.target.id.split("--")[1]
//     const contentTarget = document.querySelector(`#attraction--${buttonId}`)
//     contentTarget.showModal()
// })
// }
 
// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id.startsWith("closeWindow--")) {
//         // console.log("test")
//           const [closeButton, id] = clickEvent.target.id.split("--")
//           const contentTarget = document.target.id.startsWith(`#attractionDialog--${id}`) 
//           contentTarget.innerHTML = contentTarget.close()
//     }
// })

// export const closeAttractionDetails = () => {
//     eventHub.addEventListener("click", (clickEvent)
//       clickEvent.target.className === "close-button-block2") {
//       console.log("heard2")
//       const dialogId = clickEvent.target.id.split("--")[1]
//       const theDialog = document.querySelector(`#attractionDialog--${dialogId}`)
//       theDialog.close()
//       })}

// export const closeAttractionDetails = () => {
//     eventHub.addEventListener("click", clickEvent => {
//     clickEvent.target.className === ("close-button-block2")
//     const dialogId = clickEvent.target.id.split("--")[1]
//     const theDialog = document.querySelector(`#attractionDialog--${dialogId}`)
//     theDialog.close()
// })
// }


// export const showEateryDetails = () => {
//   eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id.startsWith("eatDetailButton--")) {
//       const buttonId = clickEvent.target.id.split("--")[1]
//       const contentTarget = document.querySelector(`.eatery--${buttonId}`)
//       contentTarget.showModal()
//     } else if (clickEvent.target.className === "close-button-block") {
//       console.log("heard")
//       const theDialog = document.querySelector("#eateryDialog")
//       theDialog.close()
//     }
//   })
// }