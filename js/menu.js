

let elipsis;
let navMenu;
let navLink;

function toggleMenu() {
    elipsis.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    elipsis.classList.remove("active");
    navMenu.classList.remove("active");
}

function setup(manageCollectionsAndTasksLinkClickEventHandler){

    elipsis = document.querySelector(".elipsis");
    navMenu = document.querySelector(".nav-menu");
    navLink = document.querySelectorAll(".nav-link");
  
    let manageCollectionsAndTasksLink = navMenu.querySelector("#manageCollectionsAndTasks");
    manageCollectionsAndTasksLink.addEventListener("click", manageCollectionsAndTasksLinkClickEventHandler);
    
    elipsis.addEventListener("click", toggleMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
}

export default {setup};