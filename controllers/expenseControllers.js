const Expense = require('../models/expenseModel')

exports.createExpense = async (req, res) => {
    const { date, category, amount } = req.body;
    try {
      await Expense.create({ date, category, amount });
      console.log('into create expense');
      res.sendStatus(201); // Created
    } catch (error) {
      console.error(error);
      res.sendStatus(500); // Internal Server Error
    }
  }

exports.getExpense = async (req, res) => {
    try {
      const expenses = await Expense.findAll();
      res.json(expenses);
    } catch (error) {
      console.error(error);
      res.sendStatus(500); // Internal Server Error
    }
  }

//   PUT /api/expenses/:id - Update an existing expense entry by ID


exports.editExpense = async (req, res) => {
  const id = req.params.id;
  const { date, category, amount } = req.body;
  try {
      // Update the expense in the database
      await Expense.update({ date, category, amount }, { where: { id } });
      res.sendStatus(200); // OK
  } catch (error) {
      console.error('Error editing expense:', error);
      res.sendStatus(500); // Internal Server Error
  }
}

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  try {
      // Delete the expense from the database
      await Expense.destroy({ where: { id } });
      res.sendStatus(200); // OK
  } catch (error) {
      console.error('Error deleting expense:', error);
      res.sendStatus(500); // Internal Server Error
  }
}
