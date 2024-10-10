function funResponsive() {
    var navbar = document.querySelector(".nav-bar"); 
    if (navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive"); 
    } else {
        navbar.classList.add("responsive"); 
}
}
