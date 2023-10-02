const { Router } = require('express');

const getDoctors = require('../handlers/Doctors/getDoctors');
const getDoctorById = require('../handlers/Doctors/getDoctorById');
const postDoctor = require('../handlers/Doctors/createDoctor');
const destroyDoctor = require('../handlers/Doctors/destroyDoctor');

const doctorRouter = Router();

doctorRouter.get('/', getDoctors);
doctorRouter.post('/', postDoctor);
doctorRouter.get('/:id', getDoctorById);
doctorRouter.delete('/:id', destroyDoctor)

module.exports = doctorRouter;