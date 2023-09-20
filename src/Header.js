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




const mainInfoContainers = document.querySelectorAll("#day-info > div");
const cityInfo = document.querySelectorAll("#city-info > *");
const forecastInfo = document.querySelectorAll("#forecast-info > *");
const todayTemp = document.querySelectorAll("#today-temp > *");
const airConditions = document.querySelectorAll("#air-conditions > div > div");

gsap.from(mainInfoContainers, { x: "-100%", opacity: 0, duration: 1.5, stagger: 2 })

gsap.from(cityInfo, { scaleY: 0, opacity: 0, duration: 0.5, stagger: .4, delay: 0.6 })

gsap.from(todayTemp, { scale: 0, opacity: 0, duration: 0.3, stagger: 0.2, delay: 2.9 })

gsap.from(airConditions, { x: -15, opacity: 0, duration: 1, stagger: 0.3, delay: 5 })

