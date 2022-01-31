const contact = async (req, res) => {
  require("dotenv").config();
  console.log(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.user,
    to: "satty9509@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  try {
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.status(200);
  } catch (e) {
	  res.status(404).send(e);
  }
};

export default contact;
