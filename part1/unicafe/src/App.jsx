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
      <p> good is: {rating.good} </p>
      <p> neutral is: {rating.neutral} </p>
      <p> bad is: {rating.bad} </p>
      </div>
    </>
  )
}

export default App
