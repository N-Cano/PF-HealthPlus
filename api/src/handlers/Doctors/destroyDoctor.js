const { deleteDoctor } = require('../../controllers/doctorsControllers');
const { deleteImage } = require('../../../utils/cloudinary');

const destroyDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        // Delete doctor
        const doctor = await deleteDoctor(id);
        // Delete cloudinary image
        await deleteImage(doctor.photo.public_id);
        
        res.status(200).json({
            status: 'deleted',
            doctor
        });
    } catch (error) {
        console.log(error);
        res.status(404).json(error.message);
    }
};

module.exports = destroyDoctor;