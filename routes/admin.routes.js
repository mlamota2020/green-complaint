const { Router } = require('express');
const router = Router();
const { isAuthenticated, isLoggedIn } = require('./../helpers/auth');
const { renderConfirmation, renderAdminDashboard, renderAdminLogin, adminLogin } = require('./../controllers/admin.controller');

router.get('/admin', isAuthenticated, renderConfirmation);

router.get('/admin/login', isAuthenticated, renderAdminLogin);

router.post('/admin/login', isAuthenticated, adminLogin);

router.get('/admin/dashboard', isAuthenticated, renderAdminDashboard);

module.exports = router;