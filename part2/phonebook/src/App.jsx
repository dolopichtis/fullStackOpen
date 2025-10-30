import { useState , useEffect } from 'react'
import  Contact from './component/Contact'
import  Find from './component/Find'
import Form from './component/Form'
import Display from './component/Display'
import contactService from './services/contacts.js'

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [finded, setFinded] = useState(contacts);
	const [newContact, setNewContact] = useState(); 

	useEffect( () => {
		contactService.getPersons()
			.then( contacts => {
				setContacts(contacts);
				setFinded(contacts);
			}
			)
	}, [] );

	const handleInputName = (input) => {
		setNewContact({...newContact, name: input.target.value});
	}

	const handleInputPhone = (input) => {
		setNewContact({...newContact, number: input.target.value});
	}

	const handleSubmit = (submit) => {
		submit.preventDefault();

		if (contacts.findIndex(contact => contact.name === newContact.name) !== -1) {
			if (confirm(`contact ${newContact.name} already added to phonebook, do you want to change phone number to ${newContact.number}`) ) {
				const contact2change = contacts.find( contact => contact.name === newContact.name);
				const changedContact = {...contact2change, number: newContact.number};
				console.log(contact2change.id);
				const updatedContacts = contacts.map(contact => contact.name === newContact.name ? {...contact, number: newContact.number} : contact);
				contactService.updPerson(contact2change.id, changedContact).then(response => {
					setContacts(updatedContacts);
					setFinded(updatedContacts);
				})
				
			}
		} else {
			contactService.createPerson(newContact)	
				.then( response => {
					console.log('post', response);
					setContacts([...contacts, {...newContact, id: response.id}]);
					setFinded([...contacts, {...newContact, id: response.id}]);
				}
				)
		}
	}

	const handleFind = (input) => {
		setFinded(contacts.filter(contact => contact.name.toLowerCase().startsWith(input.target.value)));
	}

	const handleDeletion = (id) => {
		contactService.deletePerson(id)
			.then(response => {
				const newContacts = contacts.filter(contact => contact.id !== id);
				setFinded(newContacts);
				setContacts(newContacts);
			})
	}

	return (
		<>
			<Find handleFind={ handleFind } />
			<Form handleSubmit = {handleSubmit} handleInputName = {handleInputName} handleInputPhone = {handleInputPhone} />
			<Display contacts={finded} handleDeletion={handleDeletion} />
		</>
	)

}

export default App
