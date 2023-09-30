const navBar = document.querySelector("nav");
const buttonNavBar = navBar.querySelectorAll("button");
const sectionContainer = document.querySelectorAll("section.container");
buttonNavBar.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttonNavBar.forEach(li => {
      li.classList.remove("active");
    })
    button.classList.add("active");
    sectionContainer.forEach(section => {
      section.classList.remove("active");
    })
    sectionContainer[index].classList.add("active");
  })
});
