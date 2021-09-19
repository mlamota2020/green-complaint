const adminCTRL = {};
const Report = require('./../models/Report');
const User = require('./../models/User');
/** Catch all the reports and show it on the dashboard. */
adminCTRL.renderAdminDashboard = async (req, res) => {
    const reportsCount = await Report.find().countDocuments();
    const reports = await Report.find().sort({'createdAt': -1});
    const usersCount = await User.find().countDocuments();
    res.render('admin/dashboard', { reportsCount, reports, usersCount });
}

module.exports = adminCTRL;