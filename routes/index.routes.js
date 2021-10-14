const { Router } = require('express');
const router = Router();
const { renderIndex, renderHome, render404Page } = require('./../controllers/index.controller');
const { /* isAuthenticated *//* , isLoggedIn */ } = require('./../helpers/auth');

router.get('/',/*  isLoggedIn, */ renderIndex);

router.get('/home',/*  isAuthenticated, */ renderHome);

module.exports = router;