const Subject = require('../models/subject');
const mongoose = require('mongoose');

// GET ROUTES

const getAllSubjects = async (req, res) => {
	try {
		const subjects = await Subject.find({});
		res.status(200).json(subjects);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// POST ROUTES

const addSubject = async (req, res) => {
	const details = req.body;
	try {
		const newSubject = new Subject({ ...details });
		await newSubject.save();
		res.status(201).json(newSubject);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = {
	getAllSubjects,
	addSubject
};