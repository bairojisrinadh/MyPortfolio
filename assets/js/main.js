// Add active class to current selected nav link
var navbar = document.getElementById("navId");
var navLinks = document.getElementsByClassName("navlink");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    let activeLinks = document.getElementsByClassName("active");
    activeLinks[0].classList.remove("active");
    this.classList.add("active");
  });
}
