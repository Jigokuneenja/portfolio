let currentPage = "home"
const home = document.getElementById("home")
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const contactMe = document.getElementById("contactMe")
const cursor = document.querySelector(".cursor");
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
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    /*if(e.clientX < 0 || e.clientX > screen.height || e.clientX == null){
    	cursor.style.left = 0px;
    }*/
});
