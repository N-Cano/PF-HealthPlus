const { Router } = require('express');

const getDoctors = require('../handlers/Doctors/getDoctors');
const getDoctorById = require('../handlers/Doctors/getDoctorById');
const deleteDoctor = require('../handlers/Doctors/deleteDoctor');
const postDoctor = require('../handlers/Doctors/createDoctor');

const doctorRouter = Router();

doctorRouter.get('/', getDoctors);
doctorRouter.post('/', postDoctor);
doctorRouter.get('/:id', getDoctorById);
doctorRouter.delete('/delete/:id', deleteDoctor);


module.exports = doctorRouter;