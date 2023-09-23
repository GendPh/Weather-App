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



const mainInfo = document.querySelectorAll("#main-info > div")

gsap.from(mainInfo, { x: "-100%", opacity: 0, duration: 1, stagger: 3 })

const dayInfo = document.querySelectorAll("#day-info > div");
const cityInfo = document.querySelectorAll("#city-info > *");
const todayTemp = document.querySelectorAll("#today-temp > *");
const airConditions = document.querySelectorAll("#air-conditions > div > div");

gsap.from(dayInfo, { x: "-100%", opacity: 0, duration: 1, stagger: 1 })
//1st second
gsap.from(cityInfo, { scaleY: 0, opacity: 0, duration: 0.4, stagger: .2, delay: 0.4 })
//2nd Second
gsap.from(todayTemp, { scale: 0, opacity: 0, duration: 0.16, stagger: .16, delay: 1.1 })
//3rd Second
gsap.from(airConditions, { x: -15, opacity: 0, duration: 1, stagger: .25, delay: 2.1 })