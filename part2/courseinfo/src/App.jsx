import { useState } from 'react'

const App = () => {
				const courses = [
								{
												name: 'Half Stack application development',
												id: 1,
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
																},
																{
																				name: 'Redux',
																				exercises: 11,
																				id: 4
																}
												]
								}, 
								{
												name: 'Node.js',
												id: 2,
												parts: [
																{
																				name: 'Routing',
																				exercises: 3,
																				id: 1
																},
																{
																				name: 'Middlewares',
																				exercises: 7,
																				id: 2
																}
												]
								}
				]

				return (
								<>
								{courses.map(
												(course) => <Course key={course.id} course={course} />)
				         } 
								 </>
				)

}

const Course = ({course}) => {
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
																<Part key={'part' + part.id} part={part.name} exercises={part.exercises} />) }
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
												<h3>Number of exercises is: {exercises}</h3>
								</>
				)
}

export default App
