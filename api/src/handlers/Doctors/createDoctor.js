const { createDoctor } = require("../../controllers/doctorsControllers");


const postDoctor = async (req, res) => {
    try {
        const { description, enable, image, name, price, specialty } = req.body;
        //TODO condicionales
        const data = {description, enable, image, name, price, specialty};
        const newDoctor = await createDoctor(data);
        res.status(201).json(newDoctor)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

module.exports = postDoctor;