const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
   
    service: 'gmail',
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "steven.bolcar@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });


// const express = require('express')
// const app = express()
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//     host: "https://mail.google.com/", //replace with your email provider
//     port: 587,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     }
//   });

//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var subject = req.body.subject
//     var message = req.body.message
  
//     var mail = {
//       from: name,
//       to: 'steven.bolcar95@gmail.com', // receiver email,
//       subject: subject,
//       text: message
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   })
  //const PORT = process.env.PORT || 5000;

// app.use(express.static('src/Nav'));
// app.use(express.json())

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/src/Nav/index.js')
// });

// app.post('/', (req,res) => {

// })

// app.listen(PORT, ()=>{

// })