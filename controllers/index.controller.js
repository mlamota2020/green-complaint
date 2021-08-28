const indexCTRL = {};

indexCTRL.renderIndex = (req, res) => {
    res.render('index');
};

indexCTRL.renderHome = (req, res) => {
    res.render('home');
};

module.exports = indexCTRL;