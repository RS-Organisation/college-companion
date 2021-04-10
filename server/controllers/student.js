const Student = require('../models/student');
const mongoose = require('mongoose');

// GET ROUTES

const getStudentDetails = async (req, res) => {
	try {
		const { id } = req.params;
		const details = await Student.findById(id);
		res.status(200).json(details);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const getAllStudents = async (req, res) => {
	try {
		const details = await Student.find({});
		res.status(200).json(details);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// POST ROUTES

const addStudent = async (req, res) => {
	const details = req.body;
	try {
		const newStudent = new Student({ ...details });
		await newStudent.save();
		res.status(201).json(newStudent);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = {
	getStudentDetails,
	getAllStudents,
	addStudent
};