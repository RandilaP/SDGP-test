const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seminarSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    },
    // date: {
    //     type: Date,
    //     required: true
    // },
    // time: {
    //     type: String,
    //     required: true
    // },
    expVolCount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    // volunteer organization id should be added here
},{
    timestamps: true,
});

module.exports = mongoose.model('Seminar', seminarSchema);
