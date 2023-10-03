const { uploadUserImage } = require("../../../utils/cloudinary");
const fse = require('fs-extra');
const { updateUser } = require("../../controllers/usersControllers");

const updateUserHandler = async (req, res) => {
    try {
        const { uid, id, name } = req.body;
        // console.log(name, id, uid);
        const data = { uid, id, name };
        console.log(data);
        console.log(req.files);

        if(req.files?.image) {
            const result = await uploadUserImage(req.files.image.tempFilePath);

            data.photo = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };
            console.log(data);
            await fse.unlink(req.files.image.tempFilePath);
        };
        const updatedUser = updateUser(data);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = updateUserHandler;