import Country from './Country'
import CountryDetails from './CountryDetails'

function Display({country}) {
	if(country && country.length > 0){
		if(country.length === 1) {
		return (
			<>
			<CountryDetails country={country[0]}/>
			</>
		)
		} else if (country.length <= 10) {
			return (
			<>
					{country.map(
					(c) =>
					<Country key={c.name.common} country={c}/>
					)}
			</>
			)
		} else if (country.length > 10) {
			return(
			<p> too many matches, specify another filter </p>
			)
		}
	}
}

export default Display
