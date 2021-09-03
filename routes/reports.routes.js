const { Router } = require('express');
const router = Router();
const { renderReportForm, createNewReport, renderReports, deleteReport } = require('./../controllers/reports.controller');
const { isAuthenticated, isLoggedIn } = require('./../helpers/auth');

router.get('/reports/add', renderReportForm);

router.post('/reports/add', createNewReport);

router.get('/reports', renderReports);

router.delete('/reports/delete/:id', deleteReport);

module.exports = router;