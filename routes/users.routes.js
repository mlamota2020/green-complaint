const { Router } = require('express');
const router = Router();
const { logOut, renderSignInForm, renderSignUpForm, signIn, signUp, changeAccount } = require('./../controllers/users.controller');
const { isAuthenticated } = require('./../helpers/auth');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signUp);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signIn);

router.get('/users/logout', logOut);

router.get('/users/changeaccount', isAuthenticated, changeAccount);

module.exports = router;