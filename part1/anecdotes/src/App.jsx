import { useState } from 'react'

function App() {
	const [anecdotes, setAnecdotes] = useState([
		{text: 'As a software project approaches release, its mass increases.', rate: 0 },
		{ text: 'The energy required to release a software project is inversely proportional to the time before a scheduled release.', rate: 0 },
		{ text: 'It takes infinite energy to release a finished product on time; therefore, all software projects are both incomplete and late.', rate: 0 },
		{ text: 'Time is relative to the observer of a software project. The last month of development appears to an outside observer to take a year.', rate: 0 },
		{ text: 'If a software project becomes too large, it will collapse into a black hole. Time and money are absorbed but nothing ever comes out.', rate: 0 },
		{ text: 'Adding manpower to a late software project makes it later!',rate: 0 },
		{ text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',rate: 0 },
		{ text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', rate: 0 },
		{ text: 'Premature optimization is the root of all evil.', rate: 0 },
		{ text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', rate: 0 },
		{ text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', rate: 0 },
		{ text: 'The only way to go fast, is to go well.', rate: 0 }])
	const [index, setIndex] = useState(0)
	const handleClick = (whatDo) => () => {
		if (whatDo== "rate") {
			const anecdotesCopy = [...anecdotes];
			anecdotesCopy[index] = {...anecdotesCopy[index], rate: anecdotesCopy[index].rate + 1};
			setAnecdotes(anecdotesCopy);
		}
		if (whatDo == 'next'){
			setIndex(Math.floor(Math.random()*anecdotes.length));
		}
	}

	return (
		<>
			<h2> Anecdote of the day </h2>
			<p>{anecdotes[index].text}</p>
			<button onClick={handleClick('rate')}>vote</button>
			<button onClick={handleClick('next')}>next</button>
			<h3> most rated:</h3>
			<p> {anecdotes[index].text} </p>
		</>
	)
}

export default App
