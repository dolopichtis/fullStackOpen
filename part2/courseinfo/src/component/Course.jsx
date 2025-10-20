const Course = ({course}) => {

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

	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)

}

export default Course
