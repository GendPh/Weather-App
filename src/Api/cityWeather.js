import { fetchApi } from "./fetchApi.js";

let cityWeather;
const cityNameHeader = document.querySelector("#city-info h1");
const cityRainPer = document.querySelector("#chanceRain");
const cityTemp = document.querySelector("#city-temp");
const cityImg = document.querySelector("#city-icon");

const dayInfo = document.querySelectorAll("#day-info > div");
const cityInfo = document.querySelectorAll("#city-info > *");
const todayTemp = document.querySelectorAll("#today-temp > div");
const todayTempImg = document.querySelectorAll("#today-temp > div > img");
const airConditions = document.querySelectorAll("#air-conditions > div > div");

const getCityWeather = async () => {
  cityWeather = await fetchApi("vila nova famalicão");

  cityNameHeader.textContent = cityWeather.address;
  cityRainPer.textContent = cityWeather.currentConditions.precipprob + "%";
  cityTemp.textContent = cityWeather.currentConditions.temp + "ºC";
  cityImg.src = imgAddress(cityWeather.currentConditions.icon);

  todayTempImg.forEach((img, index) => {
    img.src = imgAddress(cityWeather.days[index].icon);
  });

  console.log(cityWeather);

}

function imgAddress(image) {
  return `./public/icons/${image}.svg`;
}

getCityWeather();

const mainInfo = document.querySelectorAll("#main-info > div")

gsap.fromTo(mainInfo, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 3 })



gsap.from(dayInfo, { x: "-100%", opacity: 0, duration: 1, stagger: 1 })
//1st second
gsap.from(cityInfo, { scaleY: 0, opacity: 0, duration: 0.4, stagger: .2, delay: 0.4 })
//2nd Second
gsap.from(todayTemp, { scale: 0, opacity: 0, duration: 0.16, stagger: .16, delay: 1.1 })
//3rd Second
gsap.from(airConditions, { x: -15, opacity: 0, duration: 1, stagger: .25, delay: 2.1 })