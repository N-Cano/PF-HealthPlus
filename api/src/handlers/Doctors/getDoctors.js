const bringDoctors = require('../../controllers/doctorsControllers');

const getDoctors = async (req, res) => {

    try {
        const doctors = await bringDoctors()
        res.status(200).json(doctors);

    } catch (error) {
        res.status(500).send(error.message);
    }

};

module.exports = getDoctors;