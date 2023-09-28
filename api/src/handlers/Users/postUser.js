const { createUser } = require('../../controllers/usersControllers')

const postUser = async (req, res) => {
    try {
        const { name, email, password, personalId, image, location, plan } = req.body;

        if (!name || !email || !password) throw new Error('Missing information to create new user')

        const data = { name, email, password, personalId, image, location, plan }
        const user = await createUser(data)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = postUser