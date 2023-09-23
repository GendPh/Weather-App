const navBar = document.querySelector("nav");
const linksNavBar = navBar.querySelectorAll("ul li");
linksNavBar.forEach(link => {
  link.addEventListener("click", () => {
    linksNavBar.forEach(li => {
      li.classList.remove("active");
    })
    link.classList.add("active");
  })
});
