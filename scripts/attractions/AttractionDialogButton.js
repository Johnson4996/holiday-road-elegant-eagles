const eventHub = document.querySelector(".container")

export const showAttractionDetails = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("detailButton--")) {
      const buttonId = clickEvent.target.id.split("--")[1]
      const contentTarget = document.querySelector(`.attraction--${buttonId}`)
      contentTarget.showModal()
    } else if (clickEvent.target.id === "closeWindow") {
      const theDialog = clickEvent.target.parentNode
      theDialog.close()
    }
  })
}
