import Country from './Country'
import CountryDetails from './CountryDetails'

function Display({country}) {
	if(country && country.length > 0){
		if(country.length === 1) {
		return (
			<>
			<CountryDetails country={country}/>
			</>
		)
		} else if (country.length <= 10) {
				console.log(country[0].name.common);
			return (
			<>
					{country.map(
					(c) =>
					<Country key={c.name.common} country={c.name.common}/>
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
