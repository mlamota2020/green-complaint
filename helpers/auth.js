const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You aren\'t signed in. Please sign in to enter that page.');
        res.redirect('/');
    }
}

module.exports = helpers;