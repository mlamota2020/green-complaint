const reportsCTRL = {};
const Report = require('./../models/Report');

/** Render the view to create reports. */
reportsCTRL.renderReportForm = (req, res) => {
    res.render('reports/new-report');
}
/** Catch user data to create a new report into the database. */
reportsCTRL.createNewReport = async (req, res) => {
    const { person_name, title, report, state } = req.body;
    const newReport = new Report({person_name, title, report, state});
    await newReport.save();
    req.flash('success_msg', 'Report added successfully!');
    res.redirect('/reports');
}
/** Catch all the reports in the database and show it in a view. */
reportsCTRL.renderReports = async (req, res) => {
    const reports = await Report.find()
                                .sort({date: -1})
                                .lean();
    res.render('reports/all-reports', { reports });
}
/** Use of a DELETE HTTP method with method-override to delete reports. */
reportsCTRL.deleteReport = async (req, res) => {
    await Report.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'The report has been marked as resolved and deleted. I told you there isn\'t holding back.');
    res.redirect('/reports');
}

module.exports = reportsCTRL;