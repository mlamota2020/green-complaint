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
/** Helper to be used when the user enters by example to 'sign-up' when it's signed-in. If the user goes to that route, redirect to the home. */
helpers.isLoggedIn = (req, res, next) => {
    if (req.user) {
        req.flash('alert_msg', 'You\'re already logged in.');
        res.redirect('/home');
    } else {
        return next();
    }
}


module.exports = helpers;