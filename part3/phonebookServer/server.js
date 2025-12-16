const post = (req, res, db) => {
	console.log(db);
	console.log(req.body);
// methods:
	const getID = (max = 10000) => {
		return Math.ceil(Math.random() * max);
	}
// main:
	const newEntry = req.body;
	db = [...db, {...newEntry, id: getID() + ""}]
	console.log(db);
	res.status(200).end();
}

module.exports = {post};
