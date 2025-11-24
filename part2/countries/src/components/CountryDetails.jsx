import Country from './Country'

const CountryDetails = ({country}) => {
	console.log('hi', country);
	return (
	<>
			<h2>{country.name.common}</h2>
			<p>capital {country.capital}</p>
			<p>Area {country.area} sq. km</p>
			<h3>Languages</h3>
			<div>{Object.values(country.languages).map(lang => <li key={lang}> {lang} </li>)}</div>
			<img src={country.flags.png} alt={country.name.common + " flag"}></img>
	</>
	)
}
export default CountryDetails
