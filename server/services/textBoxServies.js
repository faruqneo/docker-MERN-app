const TextBox = require('../model/textbox');

const textBoxAddition = async (textBox) => {
    try {
        return await TextBox.create(textBox);
    } catch (error) {
        throw error;
    }
}

const textBoxUpdations = async (textBoxid, textBox) => {
    try {
        return await TextBox.findByIdAndUpdate(textBoxid, textBox, {upsert: true});
    } catch (error) {
        throw error;
    }
}

module.exports = {textBoxAddition, textBoxUpdations}