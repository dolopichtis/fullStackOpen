const express = require('express');
const server = require('./server')
const morgan = require('morgan');
const cors = require('cors');

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
simplePhonebook.use(cors());

// custom morgan token for log req data
morgan.token('data', function (req, res) {
	return `{"name":"${req.body.name}","number":"${req.body.number}"}`;
});

// custom morgan log-format, that dependce on which req is: Post or else; for any req its use 'tiny' format and add req.data when it is post req;
const morganMyFormat = (tokens, req, res) => {
	if(req.method === 'POST') {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'-',
			tokens['response-time'](req, res), 'ms',
			tokens.data(req, res)
		].join(' ');
	} else {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'-',
			tokens['response-time'](req, res), 'ms'
		].join(' ');
	}
}

simplePhonebook.use(morgan(morganMyFormat));

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

const PORT = process.env.PORT || 3001;
simplePhonebook.listen(PORT, () => console.log(`Server running on the ${PORT}`));
