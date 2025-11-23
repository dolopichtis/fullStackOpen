import { useState, useEffect } from 'react'
import Input from './components/Input'
import Display from './components/Display'
import getCountries from './services/getCountryDB'

function App() {
	const [value, setValue] = useState(null);
	const [countries, setCountries] = useState(null);
	const [country, setCountry] = useState(null);

	// get db
	useEffect(
		() => {
		getCountries().then(countries => setCountries(countries)).catch(error => console.log(error))
		}, []
	);
	
	const handleValueChange = (input) => {
		setValue(input.target.value);
		// find country by value in db
		setCountry(countries.filter(element => element.name.common.toLowerCase().includes(input.target.value.toLowerCase())));
	}

	return (
	<>
			<Input handleValueChange={handleValueChange}/>
			<Display country={country}/>
	</>
	)
}

export default App
