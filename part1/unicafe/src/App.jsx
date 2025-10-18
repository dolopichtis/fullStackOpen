import { useState } from 'react'

function App() {
  const [rating, setRating] = useState({good: 0, neutral: 0, bad: 0});
	const handleClick = (nameClick) => () => {
		setRating({[nameClick]: rating[nameClick] += 1, ...rating});
	}
	const Button = ({name}) => {
		return (
		<button onClick={handleClick(name)} > {name} </button>
		)
	}

	const Stat = ({name}) => {
		return (
		<p> {name} is: {rating[name]}</p>
		)
	}
	
	const total = rating.good + rating.neutral + rating.bad;
	
	const everage = (rating.good - rating.bad) / total;
	
	const positive = (rating.good / total) * 100;

  return (
    <>
      <h1> give feedback: </h1>
      <div className="rateIt">
	<Button name="good"/>
	<Button name="neutral"/>
	<Button name="bad"/>
      </div>
      <div className="feedback">
       <h1> Statistic </h1>
	<Stat name='good'/>
	<Stat name='neutral'/>
	<Stat name='bad'/>
	<h2> extra statistic: </h2>
				<p> total votes is: {total} </p>
				<p> average is: {everage} </p>
				<p> positive is: {positive} % </p>
      </div>
    </>
  )
}

export default App
