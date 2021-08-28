const { Router } = require('express');
const router = Router();
const { logOut, renderSignInForm, renderSignUpForm, signIn, signUp } = require('./../controllers/users.controller');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signUp);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signIn);

router.get('/users/logout', logOut);

module.exports = router;