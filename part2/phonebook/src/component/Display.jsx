import Contact from './Contact'

const Display = ({contacts, handleDeletion}) => {
	if (typeof contacts.isArray ) {
	return (
		<table>
			<tbody>
			<tr>
			<th>
			name	
			</th>
			<th>
		phone number	
			</th>
			<th>
		delete contact	
			</th>
			</tr>
			{
					contacts.map(
				(contact) => <Contact key={contact.id} contact={contact} handleDeletion={handleDeletion} />)
			} 
			</tbody>
			</table>
	)
	}
}

export default Display
