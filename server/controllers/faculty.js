const Faculty = require('../models/faculty');
const mongoose = require('mongoose');

// GET ROUTES

const getFacultyDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const details = await Faculty.findById(id);
        res.status(200).json(details);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getAllFaculty = async (req, res) => {
    try {
        const details = await Faculty.find({});
        res.status(200).json(details);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// POST ROUTES

const addFaculty = async (req, res) => {
    const details = req.body;
    try {
        const newFaculty = new Faculty({
            ...details,
            createdAt: new Date().toISOString(),
        });
        await newFaculty.save();
        res.status(201).json(newFaculty);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

module.exports = {
    getFacultyDetails,
    getAllFaculty,
    addFaculty
};