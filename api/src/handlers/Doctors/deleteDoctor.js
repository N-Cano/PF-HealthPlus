const deleteDoctor = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        status: `Emulo que deshabilito al doctor de ID: ${id}`
    })
};

module.exports = deleteDoctor;