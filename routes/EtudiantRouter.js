const express = require("express");

// The controller
const {
	addNewEtudiant,
	listEtudiant,
	getEtudiant,
	updateEtudiant,
	deleteEtudiant,
} = require("../controller/EtudiantController");

const router = express.Router();

router.post("/", addNewEtudiant);
router.get("/", listEtudiant);
router.get("/:etudiant", getEtudiant);
router.put("/:etudiant", updateEtudiant);
router.delete("/:etudiant", deleteEtudiant);

// and as always we should export the router
module.exports = router;
