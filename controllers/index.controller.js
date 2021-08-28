const indexCTRL = {};

indexCTRL.renderIndex = (req, res) => {
    res.render('index');
};

indexCTRL.renderHome = (req, res) => {
    res.render('home');
};

indexCTRL.render404Page = (req, res) => {
    res.render('404');
}

module.exports = indexCTRL;