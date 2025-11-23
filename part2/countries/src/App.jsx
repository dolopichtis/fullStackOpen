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
		const value = input.target.value;
		setValue(value);
		// find country by value in db
		if(value.length > 0) {
			setCountry(countries.filter(element => element.name.common.toLowerCase().includes(value.toLowerCase())));
		} else {
			setCountry(null);
		}
	}

	return (
		<>
			<Input handleValueChange={handleValueChange}/>
			<Display country={country}/>
		</>
	)
}

export default App
