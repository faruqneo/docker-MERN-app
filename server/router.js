const router = require('express').Router();
const {addNewTextBox, updateTextbox} = require('./controller/textBoxController');

router.post('/addTextBox', addNewTextBox);
router.put('/updateTextbox/:id', updateTextbox);

module.exports = router