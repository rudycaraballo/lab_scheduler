import nodemailer from 'nodemailer'


let sendEmail = async (email, altEmail, message) => {
// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // For Gmail
    port: 587, // For TLS
    secure: false, // true for 465 (SSL), false for other ports like 587 (TLS)
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: "twpl fyiz wzeg uewx" // Consider using OAuth2 or an App password for Gmail
    }
});

    let msg = `User Email: ${email}\nUser Alternate Email ${altEmail}\n ${message}`

    try {
        const info = await transporter.sendMail({
            from: '"User" <user@oldwestbury.edu>', // Sender address
            to: process.env.SMTP_RECIPIENT, // List of receivers
            subject: "IT TIcket", // Subject line
            text: msg, // Plain text body
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
  };
  
  export default sendEmail;