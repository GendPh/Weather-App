import { fetchApi } from "./fetchApi.js";
import { placeCityInfo, todayForecast, airCondition, sevenDayForecast, cityWeatherAnimation } from "./utilsFunctions.js";

const getCityWeather = async (city) => {
  let cityWeather = await fetchApi(city);

  let cityName = cityWeather.address;
  let cityRainPer = cityWeather.currentConditions.precipprob;
  let cityTemp = cityWeather.currentConditions.temp;
  let cityRealTemp = cityWeather.currentConditions.feelslike;
  let cityConditionIcon = cityWeather.currentConditions.icon;
  let cityWindSpeed = cityWeather.currentConditions.windspeed;
  let cityUvIndex = cityWeather.currentConditions.uvindex;

  placeCityInfo(cityName, cityRainPer, cityTemp, cityConditionIcon);
  todayForecast(cityWeather.days[0].hours);
  airCondition(cityRealTemp, cityWindSpeed, cityRainPer, cityUvIndex);


  sevenDayForecast(cityWeather.days);

  cityWeatherAnimation();
}



getCityWeather("Vila Nova Famalicão");
