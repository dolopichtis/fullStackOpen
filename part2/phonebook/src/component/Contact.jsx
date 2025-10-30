import contactService from './../services/contacts.js'
const Contact = ({contact, handleDeletion}) => {

	const handleClick = (id) => () => {
		handleDeletion(id);
	}

	const Name = ({contact}) => {
		return(
			<tr>
				<td> <strong> {contact.name} </strong> </td>
				<td> phone: {contact.number} </td>
				<td> <button onClick={handleClick(contact.id)}> del name: {contact.name} </button> </td>
			</tr>
		)
	}

	return (
		<Name contact={contact} />
	)

}

export default Contact
