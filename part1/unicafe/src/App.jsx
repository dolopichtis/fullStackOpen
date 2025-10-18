import { useState } from 'react'

function App() {
  const [rating, setRating] = 
	useState({
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
	})

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

	const StatisticLine = ({name}) => {
		if (name == "average") {
			return (
				<p> average is: {(rating.good - rating.bad) /rating.total} </p>
			)
		}
		if (name == "positive") {
			return (
				<p> positive is: {(rating.good / rating.total) * 100} </p>
			)
		}
		return (
		<p> {name} is: {rating[name]}</p>
		)
	}
	

	const StatisticDisplay = () => {

		if (rating.total == 0) {
		return (
		       <h2> No feedback given. Be the first :) </h2>
		)
		}
		return (
	      <div className="feedback">
		       <h1> Statistic </h1>
			<StatisticLine name='good'/>
			<StatisticLine name='neutral'/>
			<StatisticLine name='bad'/>
			<h2> extra statistic: </h2>
			<StatisticLine name='total'/>
			<StatisticLine name='average'/>
			<StatisticLine name='positive'/>
     		 </div>
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
