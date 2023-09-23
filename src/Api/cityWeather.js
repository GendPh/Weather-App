import { fetchApi } from "./fetchApi.js";

let cityWeather;
const cityNameHeader = document.querySelector("#city-info h1");
const cityRainPer = document.querySelector("#chanceRain");
const cityTemp = document.querySelector("#city-temp");
const cityImg = document.querySelector("#city-icon");
const mainInfo = document.querySelectorAll("#main-info > div")
const dayInfo = document.querySelectorAll("#day-info > div");
const cityInfo = document.querySelectorAll("#city-info > *");
const todayTemp = document.querySelectorAll("#today-temp > div");
const todayTempImg = document.querySelectorAll("#today-temp > div > img");
const todayTempTemp = document.querySelectorAll("#today-temp > div > p:last-child");
const airConditions = document.querySelectorAll("#air-conditions > div > div");
const airConditionsSettings = document.querySelectorAll("#air-conditions > div > div > p");
const sevenDayForecastDay = document.querySelectorAll("#seven-day-forecast > div > h3");
const sevenDayForecastImg = document.querySelectorAll("#seven-day-forecast > div > .conditions > img");
const sevenDayForecastCondition = document.querySelectorAll("#seven-day-forecast > div > .conditions > p");
const sevenDayForecastTempMin = document.querySelectorAll(".min-temp");
const sevenDayForecastTempMax = document.querySelectorAll(".max-temp");



const getCityWeather = async () => {
  cityWeather = await fetchApi("vila nova famalicão");

  cityNameHeader.textContent = cityWeather.address;
  cityRainPer.textContent = cityWeather.currentConditions.precipprob + "%";
  cityTemp.textContent = cityWeather.currentConditions.temp + " ºC";
  cityImg.src = imgAddress(cityWeather.currentConditions.icon);

  let startDay = 3;
  todayTempImg.forEach((img, index) => {
    img.src = imgAddress(cityWeather.days[0].hours[startDay + 3].icon);
    todayTempTemp[index].textContent = cityWeather.days[0].hours[startDay + 3].temp + "ºC";
    startDay += 3
  });
  airConditionsSettings[0].textContent = cityWeather.currentConditions.feelslike + " ºC";
  airConditionsSettings[1].textContent = cityWeather.currentConditions.windspeed + " km/h";
  airConditionsSettings[2].textContent = cityWeather.currentConditions.precipprob + "%";
  airConditionsSettings[3].textContent = cityWeather.currentConditions.uvindex;

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  sevenDayForecastDay.forEach((day, index) => {
    const dateStr = cityWeather.days[index].datetime;
    const date = new Date(dateStr);
    const dayOfWeekNumber = date.getDay();
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    (index == 0 ? day.textContent = "Tod" : day.textContent = dayOfWeekName)
    sevenDayForecastImg[index].src = imgAddress(cityWeather.days[index].icon)
    sevenDayForecastCondition[index].textContent = cityWeather.days[index].conditions;
    sevenDayForecastTempMin[index].textContent = cityWeather.days[index].tempmin + "/";
    sevenDayForecastTempMax[index].textContent = cityWeather.days[index].tempmax;
  });



  /* console.log(cityWeather);

  gsap.fromTo(mainInfo, { x: "-100%", opacity: 0 }, { x: "0", opacity: 1, duration: 1, stagger: 3 })

  gsap.from(dayInfo, { x: "-100%", opacity: 0, duration: 1, stagger: 1 })
  //1st second
  gsap.from(cityInfo, { scaleY: 0, opacity: 0, duration: 0.4, stagger: .2, delay: 0.4 })
  //2nd Second
  gsap.from(todayTemp, { scale: 0, opacity: 0, duration: 0.16, stagger: .16, delay: 1.1 })
  //3rd Second
  gsap.from(airConditions, { x: -15, opacity: 0, duration: 1, stagger: .25, delay: 2.1 }) */
}

function imgAddress(image) {
  return `./public/icons/${image}.svg`;
}

getCityWeather();
