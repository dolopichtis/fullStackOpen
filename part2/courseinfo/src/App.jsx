import { useState } from 'react'

const App = () => {


	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			}]
	}

	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

const Header = ({course}) => {
	return(
		<h1>{course.name}</h1>
	)
}

const Content = ({course}) => {
	return(
		<>
			{course.parts.map((part, index) => 
				<Part key={'part' + index} part={part.name} exercises={part.exercises} />) }
		</>
	)
}

const Part = ({part, exercises}) => {
	return (
		<p> {part} - {exercises} </p>
	)
}

const Total = ({course}) => {
	const exercises = course.parts.reduce( (sum, part) => sum + part.exercises, 0 )
	return (
		<>
			<p>Number of exercises {exercises}</p>
		</>
	)
}

export default App
