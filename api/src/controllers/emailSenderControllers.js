const nodemailer = require('nodemailer');

const sendEmail = async (email, doctor, date, schedule, user) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "healthplus048@gmail.com", 
            pass: "aoxj ordm zpzw pevx"
        }
    });

    const mailOptions = {
        from: "healthplus048@gmail.com", 
        to: email,
        subject: "Scheduled medical appointment",
        text: `
            Dear ${user.name} ${user.lastName}
            
            We hope this message finds you well. We would like to remind you of your upcoming appointment with our specialist in ${doctor.specialty} on ${date} at ${schedule}. Your health is our top priority, and we are looking forward to serving you.
            
            Appointment Details:
            - Specialist: ${doctor.name}
            - Specialty: ${doctor.specialty}
            - Date: ${date}
            - Time: ${schedule}hs.
            
            If for any reason you cannot attend this appointment, please let us know in advance so we can reschedule it at your convenience.
            
            We are committed to providing you with the best possible medical care. If you have any questions or need further information, please do not hesitate to contact us.
            
            We look forward to seeing you soon and taking care of your health!
            
            Best regards,
            Health Plus.
            +5493516867775
            healthplus048@gmail.com
        `
    };

    return await transporter.sendMail(mailOptions);
};

module.exports = sendEmail