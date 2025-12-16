const post = (req, res, db) => {
// methods:
	const getID = (max = 10000) => {
		return Math.ceil(Math.random() * max);
	}
// main:
	const newEntry = req.body;
	let resBody;
	let resStatus;
	if (newEntry.name && newEntry.number) {
		resStatus = 400;
		if (!db.find((item) => item.name === newEntry.name)){
			db = [...db, { id: getID() + "", ...newEntry }]
			console.log(db);
			resBody = newEntry;
			resStatus = 200;
		} else {
			resBody = { error: 'name must be unique' }
		}
	} else {
		resBody = { error: 'name and number must be filled-in' }
	}
	res.status(resStatus).json(resBody).end();
}

module.exports = {post};
