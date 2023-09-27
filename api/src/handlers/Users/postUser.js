const createUser = require('../../controllers/usersControllers')

const postUser = async (req, res) => {
    const { name, email, password, personalId, image, location, plan } = req.body;

    const data = { name, email, password, personalId, image, location, plan }
    const user = await createUser(data)
    res.status(201).json(user)
};

module.exports = postUser