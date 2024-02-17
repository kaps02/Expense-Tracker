// routes/routes.js

const express = require('express');
const router = express.Router();
const Controller = require('../controllers/expenseControllers');

router.post('/expenses', Controller.createExpense);
router.get('/expenses', Controller.getExpense);
router.put('/expenses/:id', Controller.editExpense); // Update expense
router.delete('/expenses/:id', Controller.deleteExpense);

module.exports = router;
