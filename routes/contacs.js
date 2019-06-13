const express = require('express');
const router = express.Router();

// @route   GET api/contacs
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacs
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route   PUT api/contacs/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacs/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
