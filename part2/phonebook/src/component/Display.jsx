import Contact from './Contact'

const Display = ({contacts}) => {
	return (
		<>
			{contacts.map(
				(contact) => <Contact key={contact.id} contact={contact} />)
			} 
			</>
	)
}

export default Display
