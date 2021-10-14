const { Router } = require('express');
const router = Router();
const { renderReportForm, createNewReport, renderReports, deleteReport, solveReport, renderEditReport, editReport, renderResolvedReports, restoreReport, renderFullReport } = require('./../controllers/reports.controller');
const {/*  isAuthenticated, isLoggedIn */ } = require('./../helpers/auth');

router.get('/reports/add',/*  isAuthenticated, */ renderReportForm);

router.post('/reports/add',/*  isAuthenticated, */ createNewReport);

router.get('/reports',/*  isAuthenticated, */ renderReports);

router.get('/reports/show/:id',/*  isAuthenticated, */ renderFullReport);

router.get('/reports/edit/:id',/*  isAuthenticated, */ renderEditReport);

router.put('/reports/edit/:id',/*  isAuthenticated, */ editReport);

router.delete('/reports/solve/:id',/*  isAuthenticated, */ solveReport);

router.delete('/reports/delete/:id',/*  isAuthenticated, */ deleteReport);

router.get('/reports/resolved',/*  isAuthenticated, */ renderResolvedReports);

router.put('/reports/restore/:id',/*  isAuthenticated, */ restoreReport);

module.exports = router;