// backend/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const TaskModel = require('../models/TaskModel');

// GET all tasks with user details
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await TaskModel.find().populate('createdBy', 'name email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
