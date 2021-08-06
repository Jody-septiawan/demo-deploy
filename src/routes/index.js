const express = require('express');

const router = express.Router();

const { addUser, getTodos } = require('../controllers/todo');

// TODO
router.get('/todos', getTodos);
router.post('/todo', addUser);

module.exports = router;
