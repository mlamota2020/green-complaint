const reportsCTRL = {};
const Report = require('./../models/Report');


reportsCTRL.renderReportForm = (req, res) => {
    res.render('reports/new-report');
}

reportsCTRL.createNewReport = async (req, res) => {
    const { person_name, title, report, state } = req.body;
    const newReport = new Report({person_name, title, report, state});
    await newReport.save();
    req.flash('success_msg', 'Report added successfully!');
    res.redirect('/reports');
}

reportsCTRL.renderReports = async (req, res) => {
    const reports = await Report.find().lean();
    res.render('reports/all-reports', { reports });
}

reportsCTRL.deleteReport = async (req, res) => {
    await Report.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'The report has been marked as resolved and deleted. I told you there isn\'t holding back.');
    res.redirect('/reports');
}

module.exports = reportsCTRL;