const doctors = [
    {name: 'Manu', specialty: 'Urology', price: 200},
    {name: 'Nacho', specialty: 'Dermatology', price: 120},
    {name: 'Paula', specialty: 'Endocrinology', price: 80},
    {name: 'Kate', specialty: 'Rheumatology', price: 40},
    {name: 'Lauty', specialty: 'Radiology', price: 150},
    {name: 'Jorge', specialty: 'Geriatrics', price: 320},
    {name: 'Nahu', specialty: 'Oncology', price: 70},
    {name: 'Leo', specialty: 'Psychiatry', price: 120},
    {name: 'Messi', specialty: 'Cardiology', price: 80},
    {name: 'Riquelme', specialty: 'General Doctor', price: 35},
    {name: 'Mirtha Legran', specialty: 'Obstetrics and Gynecology', price: 120},
    {name: 'Esto', specialty: 'Ophthalmology', price: 130},
    {name: 'Es', specialty: 'Rhinology/Nasal and Sinus Care', price: 100},
    {name: 'BOKAAAA', specialty: 'Chiropodist', price: 120},
]

const getDoctors = (req, res) => {
    res.status(200).json(doctors)
};

module.exports = getDoctors;