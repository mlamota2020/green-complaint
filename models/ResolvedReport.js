const { Schema, model } = require('mongoose');
/** Model for reports markes as resolved. */
const ResolvedReportSchema = new Schema({
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

module.exports = model('ResolvedReport', ResolvedReportSchema);