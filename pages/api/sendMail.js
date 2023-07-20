import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'ukr.net',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // eslint-disable-next-line no-undef
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${email}`,
    subject: 'Лист від SoftRyzen Internship',
    html: ` <h1>${name}, доброго дня!</h1>
    ${text}`,
  };

  // eslint-disable-next-line no-undef
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: 'OK' });
};

export default sendMail;
