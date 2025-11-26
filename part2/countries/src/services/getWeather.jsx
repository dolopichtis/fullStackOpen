import axios from 'axios'
const api_key = import.meta.env.VITE_WEATHER_KEY
const getWeather = (city) => {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
	return axios.get(apiUrl).then(response => response.data);
}

export default getWeather
