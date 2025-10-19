import { useState } from 'react'

function App() {
  const [rating, setRating] = 
	useState({
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
	})

	const tableKeys = ['good', 'neutral', 'bad', 'total', 'average', 'positive'];

	const handleClick = (nameClick) => () => {

		// if setState not be a asinchronius, it will be posible to add average and positive keys to this object
		setRating(
			prevRating => (
				{
					...prevRating,
					[nameClick]: prevRating[nameClick] + 1,
					total: prevRating.total + 1,
				}
			)
		);

	}
	const Button = ({name}) => {
		return (
		<button onClick={handleClick(name)} > {name} </button>
		)
	}

	const StatisticLine = ({obj, name}) => {
		if (name == "average") {
			return (
				<>
				<td> {name} is:</td>
				<td> {(obj.good - obj.bad) /obj.total} </td>
				</>
			)
		}
		if (name == "positive") {
			return (
				<>
				<td> {name} is:</td>
				<td>{(obj.good / obj.total) * 100} </td>
				</>
			)
		}
		return (
			<>
		<td> {name} is: </td>
		<td>{obj[name]}</td>
		</>
		)
	}
	

	const StatisticDisplay = () => {
		if (rating.total == 0) {
		return (
		       <h2> No feedback given. Be the first :) </h2>
		)
		}
		return (
			<table>
				<tbody>
				{tableKeys.map(item => (
				<tr key={item}>
				<StatisticLine obj={rating} name={item} />
				</tr>
				))}
				</tbody>
     		 	</table>
		)
	}

  return (
    <>
      <h1> give feedback: </h1>
      <div className="rateIt">
	<Button name="good"/>
	<Button name="neutral"/>
	<Button name="bad"/>
      </div>
      <StatisticDisplay />
    </>
  )
}

export default App
