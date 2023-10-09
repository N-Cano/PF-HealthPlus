const { uploadUserImage } = require("../../../utils/cloudinary");
const fse = require('fs-extra');
const { updateUser } = require("../../controllers/usersControllers");

const updateUserHandler = async (req, res) => {
    try {
        const { uid, name, lastName, date, userId} = req.body;
        const data = {
            uid
        };

        if(name !== '') data.name = name;
        if(lastName !== '') data.lastName = lastName;
        if(date !== '') data.date = date;
        if(userId !== '') data.userId = userId;

        if(req.files?.img) {
            const result = await uploadUserImage(req.files.img.tempFilePath);

            data.photo = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };
            await fse.unlink(req.files.img.tempFilePath);
        };
        const updatedUser = await updateUser(data);
        res.status(200).json({
            status: 'updated',
            updatedUser
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = updateUserHandler;