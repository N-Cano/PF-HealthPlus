const { deleteDate } = require("../../controllers/datesControllers");

const deleteDateHandler = async (id) => {
    try {
        const date = await deleteDate(id);
        resizeBy.status(200).json({
            status: 'deleted',
            date
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
};

module.exports = deleteDateHandler;