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
			<div>
				<tl>
					<td>
						<CountryDetails country={country}/>
					</td>
					<td>
						<button onClick={handleClick}>Show</button>
					</td>
				</tl>	
			</div>
		)
	} else {
		return (
			<p>{country.name.common}<button onClick={handleClick}>Show</button></p>
		)
	}
}

export default Country
