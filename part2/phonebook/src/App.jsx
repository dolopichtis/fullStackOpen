import { useState } from 'react'
import  Contact from './component/Contact'

const App = () => {
	const [id, setId] = useState(4);
	const [contacts, setContacts] = useState(
		[
			{ name: 'Arto Hellas', number: '040-123456', id: 1 },
			{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
			{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
		]
	)
	const [finded, setFinded] = useState(contacts);
	const [newContact, setNewContact] = useState(); 
	const handleInputName = (input) => {
		setNewContact({...newContact, name: input.target.value});
	}
	const handleInputPhone = (input) => {
		setNewContact({...newContact, number: input.target.value});
	}
	const handleSubmit = (submit) => {
		submit.preventDefault();

		if (contacts.findIndex(contact => contact.name === newContact.name) !== -1) {
			alert(`contact ${newContact.name} already added to phonebook`) 
		} else {
			const newId = id + 1;
			setId(newId);
			setContacts([...contacts, {...newContact, id: newId}]);
			setFinded([...contacts, {...newContact, id: newId}]);
		}
	}
	const handleFind = (input) => {
		setFinded(contacts.filter(contact => contact.name.toLowerCase().startsWith(input.target.value)));
	}

	return (
		<>
			<form onSubmit= { handleSubmit} >
				<p> find: <input name='find' onChange = {handleFind} /> </p>
				<p> name: <input name='newContact' onChange= {handleInputName} /> </p>
				<p> phone: <input name='phone' onChange= {handleInputPhone} /> </p>
				<button type='submit' >add</button>
			</form>
			{finded.map(
				(contact) => <Contact key={contact.id} contact={contact} />)
			} 
		</>
	)

}


export default App
