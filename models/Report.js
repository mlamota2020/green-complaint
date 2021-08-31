const { Schema, model } = require('mongoose');
/** Model of the reports. */
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
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Report', ReportSchema);