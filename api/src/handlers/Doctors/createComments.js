const { putComments } = require("../../controllers/doctorsControllers");

const createComments = async (req, res) => {
    try {
        const { userId,
            doctorId,
            comment,
            date,
            datesId,
            punctuation } = req.body
        const data = {
            userId,
            doctorId,
            comment,
            date,
            datesId,
            punctuation
        }
        const response = await putComments(data);
        res.status(201).json(response)
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = createComments;