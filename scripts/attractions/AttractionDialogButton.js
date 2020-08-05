// Event to close dialog button

import {useAttractions} from "./AttractionProvider"

const contentTarget = document.querySelector(".previewContainer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", (event) => {
  if (event.target.id === "closeWindow") {
    const attractionDialogBox = document.querySelector.startsWith(".details--")
    attractionDialogBox.close()
  }
})

eventHub.addEventListener("detailsClicked", (customEvent) => {
  const contentTarget = document.querySelector(".attractionsDialog")
  const attractionId = customEvent.detail.attractionChosen

  const targetAttraction = useAttractions().find(
    (attraction) => attraction.id === parseInt(attractionId)
  )

  // Show the dialog element
  contentTarget.showModal()
})
