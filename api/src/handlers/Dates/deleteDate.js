const { deleteDate } = require("../../controllers/datesControllers");

const deleteDateHandler = async (req, res) => {
    try {
        const { userId, dateId } = req.body;
        const date = await deleteDate(dateId, userId);
        res.status(200).json({
            status: 'deleted',
            date
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
};

module.exports = deleteDateHandler;