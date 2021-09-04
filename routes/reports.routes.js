const { Router } = require('express');
const router = Router();
const { renderReportForm, createNewReport, renderReports, deleteReport, renderEditReport, editReport, findReport } = require('./../controllers/reports.controller');
const { isAuthenticated, isLoggedIn } = require('./../helpers/auth');

router.get('/reports/add', isAuthenticated, renderReportForm);

router.post('/reports/add', isAuthenticated, createNewReport);

router.get('/reports', isAuthenticated, renderReports);

router.get('/reports/edit/:id', isAuthenticated, renderEditReport);

router.put('/reports/edit/:id', isAuthenticated, editReport);

router.delete('/reports/delete/:id', deleteReport);

router.post('/reports/find', isAuthenticated, findReport);

module.exports = router;