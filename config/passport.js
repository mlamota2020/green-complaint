const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passordField: 'password'
}, async (email, password, done) => {
    const user = await User.findOne({email});
    if (!user) {
        return done(null, false, { message: 'Not user found. Try again.' });
    } else {
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password. Try again.' });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});