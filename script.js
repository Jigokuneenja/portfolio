let currentPage = "home"
let home = document.getElementById("home")
let about = document.getElementById("about")
let projects = document.getElementById("projects")
let contactMe = document.getElementById("contactMe")
function showHome() {
  if (currentPage != "home") {
    home.style.display = "block"
    //about.style.display = "none"
    //projects.style.display = "none"
    //contactMe.style.display = "none"
    currentPage = "home"
  }
}
function showAbout() {
  if (currentPage != "about") {
    home.style.display = "none"
    //about.style.display = "block"
    //projects.style.display = "none"
    //contactMe.style.display = "none"
    currentPage = "about"
    console.log(currentPage);
  }
}
function showProjects() {
  if (currentPage != "projects") {
    home.style.display = "none"
    //about.style.display = "none"
    //projects.style.display = "block"
    //contactMe.style.display = "none"
    currentPage = "projects"
  }
}
function showContactMe() {
  if (currentPage != "contactMe") {
    home.style.display = "none"
    //about.style.display = "none"
    //projects.style.display = "none"
    //contactMe.style.display = "block"
    currentPage = "contactMe"
  }
}
