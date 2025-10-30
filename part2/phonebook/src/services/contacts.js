import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getPersons = () => {
	return axios.get(url).then(response => response.data).catch(error => console.log(error))
}

const deletePerson = (id) => {
	return axios.delete(url + `/${id}`).then(response => response.data).catch(error => console.log(error))
}

const createPerson = (newContact) => {
	return axios.post(url, newContact).then(response => response.data).catch(error => console.log(error))
}

export default {
	getPersons,
	deletePerson,
	createPerson
}
