import getWeather from '../services/getWeather'
import {useState, useEffect} from 'react'

const Metheo = ({city}) => {
	const [weatherData, setWeatherData] = useState(null);
	useEffect( () => {
	getWeather(city).then(data => {
	setWeatherData(data); 
		}).catch(err => console.log(err)),[]
	}
	)
	if(weatherData) {
		const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
	return(
		<>
			<h2> Weather in {city} </h2>
			<p> Temperature {Math.ceil(weatherData.main.temp - 273)} Celsius </p>
			<img src={weatherIconUrl} alt='weather icon'></img>
			<p> Wind {weatherData.wind.speed} m/s </p>
		</>
	)
	}
}


export default Metheo
