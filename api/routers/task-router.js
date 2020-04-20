const express = require('express');

const Helper = require('../helper')

const router = express.Router();

// GET TASKS
router.get('/:id', (req, res) => {
  Helper.getTasks()
    .then(tasks => {
      res.status(201).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to get tasks", err })
    })
});

// ADD TASK
router.post('/:id/tasks', (req, res) => {
  Helper.getProjectById(req.params.id)
    .then(projects => {
      if(projects.length > 0) {
        const newTask = { ...req.body, project_id: Number(req.params.id) }
        Helper.addTask(newTask)
          .then(task => {
            res.status(201).json(task)
          })
          .catch(err => {
            res.status(500).json({ errorMessage: "Unable to add task", err })
          })
      }
      else {
          res.status(400).json({ errorMessage: "Unable to find project with that ID" })
      }
    })
});