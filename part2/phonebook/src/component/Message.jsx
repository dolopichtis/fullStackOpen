const Message = ({message, setMessage, isError}) => {
	const color = isError ? 'red': 'green';
		const warningStyle = {
			color: color,
			fontStyle: 'italic',
			border: `solid 4px ${color}`,
			margin: 50,
			padding: '5px 50px',
			borderRadius: 5
		}
	if (message === null) {
		return null
	}
	setTimeout(()=>{setMessage(null)},5000)
	return (
		<div style={warningStyle}>
			<h2>{message}</h2>
		</div>
	)
}
export default Message
