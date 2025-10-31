import { useState , useEffect } from 'react'
import  Find from './component/Find'
import Form from './component/Form'
import Display from './component/Display'
import Message from './component/Message'
import contactService from './services/contacts.js'

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [finded, setFinded] = useState(contacts);
	const [newContact, setNewContact] = useState(); 
	const [message, setMessage] = useState(null);
	const [isError, setError] = useState(false);

	useEffect( () => {
		contactService.getPersons()
			.then( contacts => {
				setContacts(contacts);
				setFinded(contacts);
			}
			)
			.catch(error => {
			setMessage('data not get from server');
			setError(true);
			
			})
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
				const updatedContacts = contacts.map(contact => 
					contact.name === newContact.name ? {...contact, number: newContact.number} : contact
				);
				contactService.updPerson(contact2change.id, changedContact, setMessage)
					.then(response => {
					setContacts(updatedContacts);
					setFinded(updatedContacts);
					setMessage(`Contact ${changedContact.name} with number ${contact2change.number} updated with new number: ${changedContact.number}`);
					setError(false);
				})
				.catch( error => {
				setMessage('contact not exist');
				setError(true);
			})
			}
		} else {
			contactService.createPerson(newContact)	
				.then( response => {
				setError(false);
					const newContacts = [...contacts, {...newContact, id: response.id}];
					setContacts(newContacts);
					setFinded(newContacts);
					setMessage(`Contact ${newContact.name} with number ${newContact.number} created`);
				}
				)
			.catch(error => {
			setMessage("contact can't be created")
			setError(true);
		})
		}
	}

	const handleFind = (input) => {
		setFinded(contacts.filter(contact => contact.name.toLowerCase().startsWith(input.target.value)));
	}

	const handleDeletion = (id) => {
				const newContacts = contacts.filter(contact => contact.id !== id);
				setFinded(newContacts);
				setContacts(newContacts);
		contactService.deletePerson(id)
			.then(response => {
				const deletedContact = contacts.find(contact => contact.id === id);
				setMessage(`Contact ${deletedContact.name} with number ${deletedContact.number} deleted`);
				setError(false);
			})
		.catch(error => {
				setMessage('contact already deleted');
			setError(true);
			})
	}

	return (
		<>
			<h1> Phonebook </h1>
			<Message message={message} setMessage={setMessage} isError={isError}/>
			<Find handleFind={ handleFind } />
			<Form handleSubmit = {handleSubmit} handleInputName = {handleInputName} handleInputPhone = {handleInputPhone} />
			<Display contacts={finded} handleDeletion={handleDeletion} />
		</>
	)

}

export default App
