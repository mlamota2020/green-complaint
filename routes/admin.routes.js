const { Router } = require('express');
const router = Router();
const { isAuthenticated } = require('./../helpers/auth');
const { renderAdminDashboard } = require('./../controllers/admin.controller');

router.get('/admin/dashboard',/*  isAuthenticated,  */renderAdminDashboard);

module.exports = router;