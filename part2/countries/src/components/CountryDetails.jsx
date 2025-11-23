import Country from './Country'

const CountryDetails = ({country}) => {
	const countryDetails = country[0];
	return (
	<>
			<h2>{countryDetails.name.common}</h2>
			<p>capital {countryDetails.capital}</p>
			<p>Area {countryDetails.area} sq. km</p>
			<h3>Languages</h3>
			<div>{Object.values(countryDetails.languages).map(lang => <li key={lang}> {lang} </li>)}</div>
			<img src={countryDetails.flags.png} alt={countryDetails.name.common + " flag"}></img>
	</>
	)
}
export default CountryDetails
