const { Router } = require('express');
const router = Router();
const { logOut, renderSignInForm, renderSignUpForm, signIn, signUp, changeAccount, renderUserOptions, deleteAccount } = require('./../controllers/users.controller');
const { isAuthenticated, isLoggedIn } = require('./../helpers/auth');
const { controlUserTraffic } = require('./../api/client/usercontrol');

router.get('/users/signup', isLoggedIn, renderSignUpForm);

router.post('/users/signup', isLoggedIn, signUp);

router.get('/users/signin', isLoggedIn, renderSignInForm);

router.post('/users/signin', isLoggedIn, signIn);

router.get('/users/logout', isAuthenticated, logOut);

router.get('/users/changeaccount', isAuthenticated, changeAccount);

router.get('/users/options/:id', isAuthenticated, renderUserOptions);

router.delete('/users/options/deleteaccount/:id', isAuthenticated, deleteAccount);

module.exports = router;
