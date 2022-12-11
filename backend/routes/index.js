const express = require('express');
const controllers = require("../controllers/main");
const router = express.Router();

router.get('/',controllers.health);
router.get('/sum',controllers.sum);

module.exports = router;