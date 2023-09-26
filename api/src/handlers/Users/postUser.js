const postUser = (req, res) => {
    const { name, email, password, personalId, image, location } = req.body;

    res.status(200).json({
        status: 'created',
        user: {
            name,
            email,
            password,
            personalId,
            image,
            location
        }
    })
};

module.exports = postUser