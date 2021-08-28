const { Router } = require('express');
const router = Router();
const { renderReportForm, createNewReport, renderReports, deleteReport } = require('./../controllers/reports.controller');
const { isAuthenticated } = require('./../helpers/auth');

router.get('/reports/add', isAuthenticated, renderReportForm);

router.post('/reports/add', isAuthenticated, createNewReport);

router.get('/reports', isAuthenticated, renderReports);

router.delete('/reports/delete/:id', isAuthenticated, deleteReport);

module.exports = router;