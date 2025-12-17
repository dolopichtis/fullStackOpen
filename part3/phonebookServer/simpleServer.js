const express = require('express');
const server = require('./server')
const morgan = require('morgan');

let phonebook = [
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

simplePhonebook.use(express.json());
simplePhonebook.use(morgan('tiny'));

simplePhonebook.get('/info', (req, res) => {
	const reqTime = new Date();
	res.send(`<p>Phonebook has data for ${phonebook.length} people</p>
<p>Request time is ${reqTime}</p>`);
});

simplePhonebook.get('/api/persons', (request, response) => {
	response.json(phonebook);
});

simplePhonebook.get('/api/persons/:id', (req, res) => {
	const personID = req.params.id;
	const personInfo = phonebook.find(info => info.id === personID);
	if (personInfo) {
		res.json(personInfo);
	} else {
		res.status(404).end();
	} 
});

simplePhonebook.delete('/api/persons/:id', (req, res) => {
	const personID = req.params.id;
	phonebook = phonebook.filter(info => info.id !== personID);
	console.log(phonebook);
	res.status(204).end();
});

// try to decomposition of server methods
simplePhonebook.post('/api/persons', (req, res) => server.post(req, res, phonebook));

const PORT = 3001;
simplePhonebook.listen(PORT, () => console.log(`Server running on the ${PORT}`));
