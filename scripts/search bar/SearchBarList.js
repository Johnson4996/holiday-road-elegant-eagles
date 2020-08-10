// What would search bar HTML look like?

// <input type="text" placeholder="Search..">

const contentTarget = document.querySelector(".filterContainer")

const render = () =>{
contentTarget.innerHTML = `
    <input type="text" placeholder="Search..">
`
}