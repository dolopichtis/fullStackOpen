import CountryDetails from './CountryDetails'
import { useState, useEffect } from 'react'

const Country = ({country}) => {

	const [toShow, setToShow] = useState(false);

	const handleClick = () => {
		setToShow(!toShow);
	}


	if (toShow) {
		console.log(country)
		return (
				<tr>
					<td>
						<CountryDetails country={country}/>
					</td>
					<td>
						<button onClick={handleClick}>Show</button>
					</td>
				</tr>	
		)
	} else {
		return (
		<tr>
			<td>{country.name.common}</td>
			<td>
			<button onClick={handleClick}>Show</button>
			</td>
			</tr>
		)
	}
}

export default Country
