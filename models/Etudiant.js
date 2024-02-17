// mongoose init
const mongoose = require("mongoose");

// now the schema
const etudiantSchema = mongoose.Schema({
	name: String,
	age: Number,
	nationality: String,
});

// now the model
const Etudiant = mongoose.model("Etudiant", etudiantSchema);

module.exports = Etudiant;
