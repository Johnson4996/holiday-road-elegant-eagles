const eventHub = document.querySelector(".container")

//created details var that holds event for dialog button open and close

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
