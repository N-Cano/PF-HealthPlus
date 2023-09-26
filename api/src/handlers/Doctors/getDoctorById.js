const getDoctorById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        status: `emulo que traigo al doctor con ID: ${id}`
    })
};

module.exports = getDoctorById;