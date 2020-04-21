const express = require('express');

const Helper = require('../helper')

const router = express.Router();

// GET RESOURCES
router.get('/', (req, res) => {
  Helper.getResources()
    .then(resources => {
      res.status(201).json(resources)
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to get resources" })
    })
});

// ADD RESOURCE
router.post('/', (req, res) => {
  Helper.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add resource" })
    })
});


module.exports = router