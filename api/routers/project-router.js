const express = require('express');

const Helper = require('../helper')

const router = express.Router();

// GET PROJECTS
router.get('/', (req, res) => {
  Helper.getProjects()
    .then(projects => {
      res.status(201).json(projects)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to get projects", err })
    })
});

// ADD PROJECT
router.post('/', (req, res) => {
  Helper.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to add project", err })
    })
});