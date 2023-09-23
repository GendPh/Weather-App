function imgAddress(image) {
  return `./public/icons/${image}.svg`;
}

export function placeCityInfo(address, rainPer, temp, icon) {
  document.querySelector("#city-info h1").textContent = address;
  document.querySelector("#chanceRain").textContent = rainPer + "%";
  document.querySelector("#city-temp").textContent = temp + " ºC";
  document.querySelector("#city-icon").src = imgAddress(icon);
}

export function todayForecast(array) {
  const todayTempImg = document.querySelectorAll("#today-temp > div > img");
  const todayTempTemp = document.querySelectorAll("#today-temp > div > p:last-child");
  let startDay = 3;
  todayTempImg.forEach((img, index) => {
    img.src = imgAddress(array[startDay + 3].icon);
    todayTempTemp[index].textContent = array[startDay + 3].temp + " ºC";
    startDay += 3
  });
}

export function airCondition(temp, windSpeed, rainPer, uvIndex) {
  const airConditionsSettings = document.querySelectorAll("#air-conditions > div > div > p");
  airConditionsSettings[0].textContent = temp + " ºC";
  airConditionsSettings[1].textContent = windSpeed + " km/h";
  airConditionsSettings[2].textContent = rainPer + "%";
  airConditionsSettings[3].textContent = uvIndex;
}

const getDayWeeK = (datetime) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dateStr = datetime;
  const date = new Date(dateStr);
  const dayOfWeekNumber = date.getDay();
  return daysOfWeek[dayOfWeekNumber];
}

export function sevenDayForecast(array) {
  const sevenDayForecastDay = document.querySelectorAll("#seven-day-forecast > div > h3");
  const sevenDayForecastImg = document.querySelectorAll("#seven-day-forecast > div > .conditions > img");
  const sevenDayForecastCondition = document.querySelectorAll("#seven-day-forecast > div > .conditions > p");
  const sevenDayForecastTempMin = document.querySelectorAll(".min-temp");
  const sevenDayForecastTempMax = document.querySelectorAll(".max-temp");

  let date = array[0].datetime;
  let weekDay = getDayWeeK(date);

  sevenDayForecastDay.forEach((day, index) => {
    (index == 0 ? day.textContent = "Tod" : day.textContent = weekDay)
    sevenDayForecastImg[index].src = imgAddress(array[index].icon)
    sevenDayForecastCondition[index].textContent = array[index].conditions;
    sevenDayForecastTempMin[index].textContent = array[index].tempmin + "/";
    sevenDayForecastTempMax[index].textContent = array[index].tempmax;
  });
}

export function cityWeatherAnimation() {
  const mainInfo = document.querySelectorAll("#main-info > div")
  const dayInfo = document.querySelectorAll("#day-info > div");
  const cityInfo = document.querySelectorAll("#city-info > *");
  const todayTemp = document.querySelectorAll("#today-temp > div");
  const airConditions = document.querySelectorAll("#air-conditions > div > div");
  const sevenDayForecast = document.querySelectorAll("#seven-day-forecast > div");
  //Load main container
  gsap.fromTo(mainInfo,
    { y: "100%", opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 1 })

  // Load Information of the day
  gsap.from(dayInfo,
    { y: "100%", opacity: 0, duration: 0.5, stagger: 1 })

  //1st second, city name and temp
  gsap.from(cityInfo,
    { scaleY: 0, opacity: 80, duration: 0.6, stagger: .2 })

  //2nd Second, city day forecast
  gsap.from(todayTemp,
    { scale: 0, opacity: 80, duration: 0.16, stagger: .16, delay: 1.1 })

  //3rd Second, city air condition
  gsap.from(airConditions,
    { scaleX: 0, transformOrigin: "left", opacity: 80, duration: 1, stagger: .25, delay: 2.1 })

  gsap.from(
    sevenDayForecast,
    { scaleX: 0, transformOrigin: "right", duration: 0.3, delay: 1.5, stagger: 0.2 }
  )
}