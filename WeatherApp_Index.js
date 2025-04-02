function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let todaysDate = date.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Spet",
    "Oct",
    "Nov",
    "Dec",
  ];
  let Weekday = days[day];
  let RealMonth = months[month];
  return `${hours}:${minutes} -- ${todaysDate} ${RealMonth},${year} (${Weekday}) `;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function searchResult(event) {
  event.preventDefault();
  let input = document.querySelector("#inputtedCity");
  let city = input.value;
  let apiKey = "a2t704ade1b003d643fa9333o6bb8862";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(getWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchResult);

function getWeather(response) {
  let tempElement = document.querySelector("#current-temperature");
  let CityTemp = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = CityTemp;
}
