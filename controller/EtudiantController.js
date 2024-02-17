// requiring the model
const Etudiant = require("../models/Etudiant");

// list all etudiants
const listEtudiant = async (req, res) => {
	try {
		const etudiants = await Etudiant.find();
		res.send(etudiants);
	} catch (error) {
		console.error("error");
		res.status(500).send(error);
	}
};// list all student End


// GET: /etudiants/:id
const getEtudiant = async (req, res) => {
	let { etudiant } = req.params;
	try {
		// getting the etudiant by id
		// it's just like find({id: etudiant})
		const etud = await Etudiant.findById(etudiant);

		res.send(etud);
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

// add New etudiant POST: /etudiants/
const addNewEtudiant = async (req, res) => {
	const { name, age, nationality } = req.body;

	try {
		const etudiant = new Etudiant({ name, age, nationality });
		await etudiant.save();
		res.json({ message: "added with success" });
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

// update etudiant
const updateEtudiant = async (req, res) => {
	const { etudiant } = req.params;
	const { name, age, nationality } = req.body;

	try {
		const updatedEtudiant = await Etudiant.findByIdAndUpdate(etudiant, {
			name,
			age,
			nationality,
		});
		res.send(updatedEtudiant);
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

// delete etdiant
const deleteEtudiant = async (req, res) => {
	const { etudiant } = req.params;

	try {
		// this one
		// Etudiant.deleteOne({ _id: etudiant });
		// or
		await Etudiant.findByIdAndDelete(etudiant);
		res.json({ message: `${etudiant} is deleted with success` });
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

module.exports = {
	listEtudiant,
	addNewEtudiant,
	getEtudiant,
	updateEtudiant,
	deleteEtudiant,
};
