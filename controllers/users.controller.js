const usersCTRL = {};
const passport = require('passport');
const User = require('./../models/User');
/** Render the view to sign-up users. */
usersCTRL.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}
/** Validate the data of the input's, encrypt the password and insert the data to the database. */
usersCTRL.signUp = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({text: 'The confirmation of the password don\'t match. Try again.'})
    }

    if (password.length < 4) {
        errors.push({text: 'The password must be at least 4 characters. Try again.'});
    }

    if (name.length = 0) {
        errors.push({text: 'Please add your name. Try again.'});
    }

    const emailUser = await User.findOne({email: email});
        if (emailUser) {
            errors.push({text: 'The email is used. Use another email please.'});
        }

    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            email,
            name
        });
    } else {
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'You\'re registred!! Now sign in to your account');
        res.redirect('/users/signin');
        }
    }
/** Render the view to sign-in users. */
usersCTRL.renderSignInForm = (req, res) => {
    res.render('users/signin');
}
/** Use of a authentication from 'passport' to sign-in the user. */
usersCTRL.signIn = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/home',
    failureFlash: true,
    successFlash: true
}), () => {
    req.flash('success_msg', `Hey ${user.name}!`)
};
/** Log-out the user. */
usersCTRL.logOut = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
}
/** Log-out the user and log-in with another account. */
usersCTRL.changeAccount = (req, res) => {
    req.logout();
    req.flash("alert_msg", "Add the credentials of the account.");
    res.redirect("/users/signin");
}
/** Render user options */
usersCTRL.renderUserOptions = async (req, res) => {
    const userData = await User.findOne(req.params);
    res.render('users/options', { userData, layout: false });
}
/** Delete user account. */
usersCTRL.deleteAccount = async (req, res) => {
    await User.findOneAndDelete(req.params);
    req.flash('success_msg', 'The account has been deleted.');
    res.redirect('/');
}

module.exports = usersCTRL;