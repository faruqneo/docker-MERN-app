const {textBoxAddition, textBoxUpdations} = require('../services/textBoxServies');

const addNewTextBox = async (req, res) => {
    if(!req.body) return;
    try {
        const response = await textBoxAddition(req.body);
        res.send({message: 'success', status: 200, data: response})
    } catch (error) {
        res.status(500).send({message: 'error', status: 500, error})
    }
}

const updateTextbox = async (req, res) => {
    const textBoxId = req.params.id;
    if(!req.body || !textBoxId) return;
    try {
        const response = await textBoxUpdations(textBoxId,req.body);
        res.send({message: 'success', status: 200, data: response})
    } catch (error) {
        res.status(500).send({message: 'error', status: 500, error})
    }
}

module.exports = {addNewTextBox, updateTextbox}