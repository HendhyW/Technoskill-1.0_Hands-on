const employeeController = require('../controller/employee.controller');
const express = require('express');
const router = express.Router();


router.post('/',employeeController.addEmployee);
router.get('/',employeeController.getEmployee);


module.exports = router;