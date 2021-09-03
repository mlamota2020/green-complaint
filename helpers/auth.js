const helpers = {};
/** Check if the user is authenticated. If it's true, proceed. Else, redirect the user to the sign-in view. */
helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You aren\'t signed in. Please sign in to enter that page.');
        res.redirect('/users/signin');
    }
}
helpers.isLoggedIn = (req, res, next) => {
    if (req.user) {
        req.flash('alert_msg', 'You\'re already logged in.');
        res.redirect('/home');
    } else {
        return next();
    }
}


module.exports = helpers;