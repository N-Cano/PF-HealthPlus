const { signUpUser } = require("../../controllers/usersControllers");

const createUser = async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        const data = { name, lastName, email, password };
        const newUser = signUpUser(data);
        res.status(201).json({
            status: 'created',
            newUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = createUser;