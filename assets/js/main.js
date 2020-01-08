// Add active class to current selected nav link
var navbar = document.getElementById("navId");
var navLinks = document.getElementsByClassName("navlink");
var mainNavLinks = document.querySelectorAll("#navId a");
var sections = document.querySelectorAll("section");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    let activeLinks = document.getElementsByClassName("active");
    activeLinks[0].classList.remove("active");
    this.classList.add("active");
  });
}

var menuList = document.getElementById("menulist");
var toggleBox = document.getElementById("toggleBox");
var topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(event) {
  scrollFunction();

  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

menuList.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    toggleBox.checked = false;
    topBtn.classList.remove("novisible");
  }
}

toggleBox.addEventListener("click", function() {
  if (toggleBox.checked == true) {
    topBtn.classList.add("novisible");
  }
});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
