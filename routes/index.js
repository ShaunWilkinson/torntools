var express = require('express')
var router = express.Router();

router.get('/', (req, res) => req.app.get('dashboardController').displayDashboardPage(req, res));


module.exports = router;