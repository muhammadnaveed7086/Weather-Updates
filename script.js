const input_Box = document.querySelector(".input-box");
const search_Btn = document.querySelector("#searchBtn");
const temperature = document.querySelector(".temperature");
const Humidity = document.querySelector("#humadity");
const Description = document.querySelector(".descriptoin");
const wind_Speed = document.querySelector("#wind-speed");
const Image = document.querySelector(".weather-img");
search_Btn.addEventListener("click", () => {
  updateWeather(input_Box.value);
});
const updateWeather = async (inputVal) => {
  const api_key = "7f09b2c210187b5b1e0733298f268321";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>response.json());
  console.log(weather_data);
  if(weather_data.cod='404'){
    console.log('this is wrong location');
  }
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  wind_Speed.innerHTML = `${weather_data.wind.speed}Km/h`;
  Humidity.innerText = `${weather_data.main.humidity}%`;
  Description.innerText = weather_data.weather[0].description;
  switch (weather_data.weather[0].main) {
    case "Clear":
      Image.src = "clear.png";
      break;
      case "Cloud":
        Image.src = "cloud.png";
        break;

    case "Rain":
      Image.src = "rain.png";
      break;

    case "Mist":
      Image.src = "mist.png";
      break;
    case "Snow":
      Image.src = "snow.png";
      break;
    default:
      console.log("It has not img");
      break;
  }
};
