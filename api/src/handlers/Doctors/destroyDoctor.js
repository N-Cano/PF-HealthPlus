const { deleteDoctor } = require('../../controllers/doctorsControllers')

const destroyDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDoctor = await deleteDoctor(id)
        res.status(200).json({
            status: 'deleted',
            deletedDoctor
        });
    } catch (error) {
        console.log(error);
        res.status(404).json(error.message);
    }
};

module.exports = destroyDoctor;