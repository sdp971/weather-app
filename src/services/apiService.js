import axios from 'axios';
const apiKey = import.meta.env.VITE_APP_API_KEY;


function api(city,callback) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
    .then((response) => {
      callback(response.data.weather);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default api;
