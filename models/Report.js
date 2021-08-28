const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
    person_name: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    report: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true
});

module.exports = model('Report', ReportSchema);