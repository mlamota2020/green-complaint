const { Router } = require('express');
const router = Router();
const { renderIndex, renderHome } = require('./../controllers/index.controller');
const { isAuthenticated } = require('./../helpers/auth');

router.get('/', renderIndex);

router.get('/home', isAuthenticated, renderHome);

module.exports = router;