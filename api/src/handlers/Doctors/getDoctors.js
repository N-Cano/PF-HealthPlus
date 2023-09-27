const doctors = [
    {name: 'Manu', specialty: 'Urology', price: 200 , id: 1 },
    {name: 'Nacho', specialty: 'Dermatology', price: 120 , id: 2},
    {name: 'Paula', specialty: 'Endocrinology', price: 80 , id: 3},
    {name: 'Kate', specialty: 'Rheumatology', price: 40 , id: 4},
    {name: 'Lauty', specialty: 'Ginecology', price: 150 , id: 5},
    {name: 'Jorge', specialty: 'Geriatrics', price: 320, id: 6},
    {name: 'Nahu', specialty: 'Oncology', price: 70, id: 7},
    {name: 'Leo', specialty: 'Psychiatry', price: 120 , id: 8},
    {name: 'Messi', specialty: 'Cardiology', price: 80 , id: 9},
    {name: 'Riquelme', specialty: 'General Doctor', price: 35, id: 10},
    {name: 'Mirtha Legran', specialty: 'Obstetrics and Gynecology', price: 120 , id: 11},
    {name: 'Esto', specialty: 'Ophthalmology', price: 130 , id: 12},
    {name: 'Es', specialty: 'Rhinology/Nasal and Sinus Care', price: 100 , id: 13},
    {name: 'BOKAAAA', specialty: 'Chiropodist', price: 120 , id: 14},
];

const getDoctors = (req, res) => {
    res.status(200).json(doctors)
};

module.exports = getDoctors;