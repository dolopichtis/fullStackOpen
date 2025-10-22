import { useState } from 'react'
import  Contact from './component/Contact'

const App = () => {
	const [id, setId] = useState(1);
	const [contacts, setContacts] = useState(
		[{ id: id, name: 'Arto Hellas', number: 12345 }]
	)
	const [newContact, setNewContact] = useState(''); 
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
		}
	}

	return (
		<>
			<form onSubmit= { handleSubmit} >
				<p> debug: {newContact.name}</p>
				<p> name: <input name='newContact' onChange= {handleInputName} /> </p>
				<p> phone: <input name='phone' onChange= {handleInputPhone} /> </p>
				<button type='submit' >add</button>
			</form>
			{contacts.map(
				(contact) => <Contact key={contact.id} contact={contact} />)
			} 
		</>
	)

}


export default App
