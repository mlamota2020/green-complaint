const indexCTRL = {};
/** Render the index view. */
indexCTRL.renderIndex = (req, res) => {
    res.render('index');
};
/** If the user is signed up, render the home. */
indexCTRL.renderHome = (req, res) => {
    res.render('home');
};

module.exports = indexCTRL;