const { createDate } = require('../../controllers/datesControllers');

const postDate = async (req, res) => {
    try {
        const { userId, doctorId, date, schedule } = req.body;
        if (!userId || !doctorId || !date || !schedule) throw new Error('Missing information to create new date');

        const data = { userId, doctorId, date, schedule };
        const newDate = await createDate(data);
        res.status(201).json(newDate);
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = postDate;