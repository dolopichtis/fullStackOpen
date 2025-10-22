const Contact = ({contact}) => {

	const Name = ({contact}) => {
		return(
			<>
				<ul>
					<li>{contact.name}</li>
				</ul>
			</>
		)
	}

	return (
		<div>
			<Name contact={contact} />
		</div>
	)

}

export default Contact
