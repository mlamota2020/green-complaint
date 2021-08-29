const indexCTRL = {};
/** Render the index view. */
indexCTRL.renderIndex = (req, res) => {
    res.render('index');
};
/** If the user is signed up, render the home. */
indexCTRL.renderHome = (req, res) => {
    res.render('home');
};
/** When the user go to a non-existing page, render this view. */
indexCTRL.render404Page = (req, res) => {
    res.render('404');
}

module.exports = indexCTRL;