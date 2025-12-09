const express = require('express');

const phonebook = [
	{ 
		"id": "1",
		"name": "Arto Hellas", 
		"number": "040-123456"
	},
	{ 
		"id": "2",
		"name": "Ada Lovelace", 
		"number": "39-44-5323523"
	},
	{ 
		"id": "3",
		"name": "Dan Abramov", 
		"number": "12-43-234345"
	},
	{ 
		"id": "4",
		"name": "Mary Poppendieck", 
		"number": "39-23-6423122"
	}
];

const simplePhonebook = express();

simplePhonebook.get('/info', (req, res) => {
	const reqTime = new Date();
	res.send(`<p>Phonebook has data for ${phonebook.length} people</p>
<p>Request time is ${reqTime}</p>`);
});

simplePhonebook.get('/api/persons', (request, response) => {
	response.json(phonebook);
});

const PORT = 3001;
simplePhonebook.listen(PORT, () => console.log(`Server running on the ${PORT}`));
