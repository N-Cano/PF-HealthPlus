const { bringDoctors } = require('../../controllers/doctorsControllers');

const getDoctors = async (req, res) => {

    try {
        const doctors = await bringDoctors()
        res.status(200).json(doctors);

    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
};

module.exports = getDoctors;