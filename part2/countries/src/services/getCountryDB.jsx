import axios from 'axios'

const url = 'http://localhost:3001/restcountries';

const getCountries = () => {
	return axios.get(url).then(response => response.data);
}

export default getCountries
