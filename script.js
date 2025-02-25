const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = mobileMenu.querySelectorAll("a"); 
menuToggle.addEventListener("click", () => {
     mobileMenu.classList.toggle("hidden");
     mobileMenu.classList.toggle("flex");
     mobileMenu.classList.toggle("flex-col");
});
navLinks.forEach(link => {
     link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("flex", "flex-col");
     });
});