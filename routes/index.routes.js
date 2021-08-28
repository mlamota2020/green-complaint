const { Router } = require('express');
const router = Router();
const { renderIndex, renderHome, render404Page } = require('./../controllers/index.controller');
const { isAuthenticated } = require('./../helpers/auth');

router.get('/', renderIndex);

router.get('/home', isAuthenticated, renderHome);

router.get(render404Page);

module.exports = router;