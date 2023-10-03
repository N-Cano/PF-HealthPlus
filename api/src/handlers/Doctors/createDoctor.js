const { createDoctor } = require("../../controllers/doctorsControllers");


const postDoctor = async (req, res) => {
    try {
        const { description, enable, image, name, price, specialty } = req.body;

        //validacion de tipos de datos BD
        if (
            typeof description !== 'string' ||
            typeof image !== 'string' ||
            typeof name !== 'string' ||
            typeof specialty !== 'string' ||
            typeof enable !== 'boolean' ||
            (typeof price !== 'number' || isNaN(price))
        ) throw new Error('Data types are not valid to create a new doctor');

        //TODO condicionales
        const data = { description, enable, image, name, price, specialty };
        const newDoctor = await createDoctor(data);
        res.status(201).json(newDoctor)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

module.exports = postDoctor;