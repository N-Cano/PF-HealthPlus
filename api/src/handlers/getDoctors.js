const getDoctors = (req, res) => {
    res.status(200).json({
        status: 'emulo que traigo info de los doctores'
    })
};

module.exports = getDoctors;