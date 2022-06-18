const toggleBar = document.getElementsByClassName("toggleBtb")[0]
const navBarLinks = document.getElementsByClassName("nav-links")[0]

toggleBar.addEventListener("click", ()=>{
navBarLinks.classList.toggle("active")
})