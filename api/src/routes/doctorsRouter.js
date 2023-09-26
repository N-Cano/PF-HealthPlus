const { Router } = require('express');
const getDoctors = require('../handlers/getDoctors');
const getDoctorById = require('../handlers/getDoctorById');
const deleteDoctor = require('../handlers/deleteDoctor');

const doctorRouter = Router();

doctorRouter.get('/', getDoctors);
doctorRouter.get('/:id', getDoctorById);
doctorRouter.delete('/delete/:id', deleteDoctor);


module.exports = doctorRouter;