require("dotenv").config();

// express init
const express = require("express");
const app = express();

// mongo init
const mongoose = require("mongoose");
// the name of the container
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("Database connected successfully");
}); // mongo init done 

// middlewares
// to encode body to json
app.use(express.json());

// now the routes
const etudiantRouter = require("./routes/EtudiantRouter");

// The default one
app.get("/", (req, res) => {
	res.send("School API");
});

app.use("/etudiants", etudiantRouter);

// The port
const port = process.env.PORT || 4000;

// The server init
app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});
