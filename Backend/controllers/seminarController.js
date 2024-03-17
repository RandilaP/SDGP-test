const Seminar = require('../models/seminarModel');
const mongoose = require('mongoose');

//get all seminars
const getSeminars = async (req, res) => {
    const seminars = await Seminar.find({}).sort({createdAt: -1});
    res.status(200).json(seminars);
}

const today = new Date().toISOString().split('T')[0];
const getUpcomingSeminars = async (req, res) => {
    const seminars = await Seminar.find({status: 'accepted'}).sort({createdAt: -1});
    const upcomingSeminars = seminars.filter(seminar => seminar.date >= today);
    res.status(200).json(upcomingSeminars);
}

const getPastSeminars = async (req, res) => {
    const seminars = await Seminar.find({status: 'accepted'}).sort({createdAt: -1});
    const pastSeminars = seminars.filter(seminar => seminar.date < today);
    res.status(200).json(pastSeminars);
}

//get single seminar
const getSeminar = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such seminar with that id"});
    }

    const seminar = await Seminar.findById(id);

    if(!seminar){
        return res.status(404).json({error: " No such seminar with that id"});
    }

    res.status(200).json(seminar);
}

//create a seminar
const createSeminar = async (req, res) => {
    const { subject,
        grade,
        date,
        time,
        expVolCount,
        description,
        status} = req.body;

    let emptyFields = [];

    if(!subject) emptyFields.push('subject');
    if(!grade) emptyFields.push('grade');
    if(!date) emptyFields.push('date');
    if(!time) emptyFields.push('time');
    if(!expVolCount) emptyFields.push('expVolCount');
    if(!description) emptyFields.push('description');
    if(!status) emptyFields.push('status');


    if(emptyFields.length > 0) {
        return res.status(400).json({error:`The following fields are required'`, emptyFields});
    }

    //add to database
    try{
        const seminar = await Seminar.create({
            subject,
            grade,
            date,
            time,
            expVolCount,
            description,
            status
        });
        res.status(200).json(seminar);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete a seminar
const deleteSeminar = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    const seminar = await Seminar.findOneAndDelete({ _id: id });

    if(!seminar){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    res.status(200).json(seminar);
}

//update a seminar
const updateSeminar = async (req, res) => {
    const { id } = req.params;
    const { school, description, date, time, location, image } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    const seminar = await Seminar.findOneAndUpdate({ _id: id }, {
        ...req.body});

    if(!seminar){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    res.status(200).json(seminar);
}

module.exports = {
    getSeminars,
    getUpcomingSeminars,
    getPastSeminars,
    getSeminar,
    createSeminar,
    deleteSeminar,
    updateSeminar
}
