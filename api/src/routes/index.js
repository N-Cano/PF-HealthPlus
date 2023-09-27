const doctorsRouter = require('./doctorsRouter');
const plansRouter = require('./plansRouter');
const usersRouter = require('./usersRouter');

const { Router } = require('express');
const {db} = require('../firebase');

const routes = Router();

routes.use('/doctors', doctorsRouter);
routes.use('/plans', plansRouter);
routes.use('/users', usersRouter);


// module.exports = routes;

// const pruebaRouter = require('./prueba');


// routes.post ('/new-doctor', async (req, res) => {
//     const {name, email, password} = req.body;
//     await db.collection('doctors').add({
//         name,
//         email,
//         password
//     })
//     res.send('new doctor created')
// });

// routes.get('/edit-doctor/:id', async (req, res) => {

//     const doc = await db.collection('doctors').doc(req.params.id).get()
//         console.log({
//             id: doc.id,
//             ...doc.data()
//         });
//         res.send('edit contact')
// });

// routes.get('/delete-doctor/:id', async (req, res) => {
//     await db.collection('doctors').doc(req.params.id).delete()
//     res.send('doctor deleted')
// })

// routes.post('/update-doctor/:id', async (req, res) => {
//     const { id } = req.params;
//     await db.collection('doctors').doc(id).update(req.body)
//     res.send('doctor updated')
// })


module.exports = routes;