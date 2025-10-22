const Contact = ({contact}) => {

	const Name = ({contact}) => {
		return(
			<>
				<div>
					<p><strong>{contact.name}</strong>, phone: {contact.number}</p>
				</div>
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
