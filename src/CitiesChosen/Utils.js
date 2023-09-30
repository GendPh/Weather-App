import { fetchApi } from "../Api/fetchApi.js";
import { imgAddress } from "../Api/utilsFunctions.js";

const cityTemplate = document.querySelector("[data-cityContainer]")
const citiesContainer = document.querySelector("#cities")

fetch('./src/CitiesChosen/Cities.json')
  .then(response => response.json())
  .then(async data => {

    for (const city of data) {
      const cityInfo = await fetchApi(city.city);
      const container = cityTemplate.content.cloneNode(true).children[0];
      const cityImg = container.querySelector("img");
      const cityName = container.querySelector(".city-name");
      const cityTime = container.querySelector(".city-time");
      const cityTemp = container.querySelector(".city-temp");
      cityImg.src = imgAddress(cityInfo.currentConditions.icon);
      cityImg.alt = cityInfo.currentConditions.icon;
      cityName.textContent = city.city;
      cityTime.textContent = cityInfo.currentConditions.datetime;
      cityTemp.textContent = cityInfo.currentConditions.temp + "º";
      citiesContainer.appendChild(container);
    }

    const cityContainer = document.querySelectorAll(".city-container");
    cityContainer[0].classList.add("active");
    cityContainer.forEach(container => {
      container.addEventListener("click", () => {
        cityContainer.forEach(otherContainer => {
          otherContainer.classList.remove("active");
        });
        container.classList.add("active");
      })
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });




