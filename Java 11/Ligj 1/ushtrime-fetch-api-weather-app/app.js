const temperatureDisplay = document.querySelector("#temperatureDisplay");
const imgWeather = document.querySelector("#imgWeather");

// API URL for fetching weather data based on latitude and longitude
// Prishtina latitude = 42.6629, longitude=21.1655
const apiUrl =
  "https://api.open-meteo.com/v1/dwd-icon?latitude=42.6629&longitude=21.1655&temperature_unit=celsius&current=temperature_2m&daily=weather_code&forecast_days=1&forecast_days=1";

// Function to fetch weather data from the API
async function fetchWeatherData() {
  const reponse = await fetch(apiUrl);
  const result = await reponse.json();
  displayWeatherData(result);
}

//Function to display weather details: current temperature and icon (image)
function displayWeatherData(result) {
  temperatureDisplay.innerText = `${result.current.temperature_2m} °C`;

  // Get the weather code  from result to set the corresponding icon (from icons file constant);
  let weatherCode = result.daily.weather_code[0];
  console.log(weatherCode); //

  let weatherIconSrc = "";
  //check from api result if it is day or night time
  if (result.current.is_day) {
    //set source icon to weatherIconSrc variable;
    weatherIconSrc = icons[weatherCode].day.image; // Details of icons (object of icons) loaded from the script rendered in HTML
  } else {
    weatherIconSrc = icons[weatherCode].night.image;
  }
  // Set the weather image source
  imgWeather.setAttribute("src", icons[weatherCode].day.image);
}

fetchWeatherData();
