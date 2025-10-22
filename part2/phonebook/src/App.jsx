import { useState } from 'react'
import  Contact from './component/Contact'

const App = () => {
	const [id, setId] = useState(1);
	const [contacts, setContacts] = useState(
		[{ id: id, name: 'Arto Hellas', number: 12345 }]
	)
	const [newContact, setNewContact] = useState(''); 
	const handleInput = (input) => {
		const contactObj = {
			name: input.target.value,
			number:123 
		}
		setNewContact(contactObj);
	}
	const handleSubmit = (submit) => {
		submit.preventDefault();
		const newId = id + 1;
		setId(newId);
		setContacts([...contacts, {...newContact, id: newId}]);
	}

	return (
		<>
			<form onSubmit= { handleSubmit} >
				<p> debug: {newContact.name}</p>
				<p> name: <input name='newContact' onChange= {handleInput} /> </p>
				<button type='submit' >add</button>
			</form>
			{contacts.map(
				(contact) => <Contact key={contact.id} contact={contact} />)
			} 
		</>
	)

}


export default App
