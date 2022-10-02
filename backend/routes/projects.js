const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Projects List')
})
router.get('/new', (req, res) => {
  res.send('New Project')
})

router.post('/', (req, res) => {
  res.send('Create Project')
})

router
  .get('/:id', (req, res) => {
    res.send(`Get Project with id ${req.params.id}`)
  })
  .post(() => {
    res.send(`Update Project with id ${req.params.id}`)
  })
  .delete(() => {
    res.send(`Delete Project with id ${req.params.id}`)
  })

module.exports = router
