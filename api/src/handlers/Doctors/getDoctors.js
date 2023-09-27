const bringDoctors = require('../../controllers/doctorsControllers');

const getDoctors = async (req, res) => {
    const doctors = await bringDoctors()
    res.status(200).json(doctors);

};

module.exports = getDoctors;