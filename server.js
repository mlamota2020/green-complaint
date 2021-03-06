const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('handlebars');
const chalk = require('chalk');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const { createAdminUser } = require("./libs/adminUser");

// Initializations

const app = express();
require('./config/passport');
createAdminUser();

// Settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(handlebars)
}));
app.set('view engine', '.hbs');

// Middlewares

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'green-complaint',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.alert_msg = req.flash('alert_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// Routes

app.use(require('./routes/admin.routes'));
app.use(require('./routes/index.routes'));
app.use(require('./routes/reports.routes'));
app.use(require('./routes/users.routes'));

// Static files

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'api')));

// Start server

require('./database');

app.listen(app.get('port'), () => {
    console.log('Server on port: ' + chalk.green.bold(app.get('port')) + '! \n');
});