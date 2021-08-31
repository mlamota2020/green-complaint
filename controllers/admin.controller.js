const adminCTRL = {};
const Report = require('./../models/Report');
const User = require('./../models/User');
/** Render a confirmation view. */
adminCTRL.renderConfirmation = (req, res) => {
    res.render('admin/confirmation');
}

/** Log-in the user with `admin` credentials. */
adminCTRL.renderAdminLogin = (req, res) => {
    res.render('admin/login');
}
/** Use the POST HTTP method to enter the dashboard. */
adminCTRL.adminLogin = (req, res) => {
    const { admin_name, admin_password } = req.body;
    if (admin_name === 'admin@localhost' && admin_password === 'adminpassword') {
        res.redirect('/admin/dashboard');
    } else {
        req.flash('alert_msg', 'Incorrect credentials. Try again.');
        res.render('admin/login');
    }
}

/** Catch all the reports and show it on the dashboard. */
adminCTRL.renderAdminDashboard = async (req, res) => {
    const reportsCount = await Report.find().countDocuments();
    const reports = await Report.find();
    const usersCount = await User.find().countDocuments();
    res.render('admin/dashboard', { reportsCount, reports, usersCount });
}

module.exports = adminCTRL;