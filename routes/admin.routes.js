const { Router } = require('express');
const router = Router();
const { renderConfirmation, renderAdminDashboard, renderAdminLogin, adminLogin } = require('./../controllers/admin.controller');

router.get('/admin', renderConfirmation);

router.get('/admin/login', renderAdminLogin);

router.post('/admin/login', adminLogin);

router.get('/admin/dashboard', renderAdminDashboard);

module.exports = router;