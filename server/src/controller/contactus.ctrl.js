const contactModel = require("../model/contactUs.model");
const nodemailer = require('nodemailer');
exports.insert = async (req, res) => {
    try {
        const contact = new contactModel({
            email: req.body.email,
            name: req.body.name,
            message: req.body.message
        })
        const data = await contact.save();

        /* Nodemailer Porsion */
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: 'false',
            auth: {
                user: '0083.work@gmail.com',
                pass: 'izlsnoyieiqtaray'
            }
        });

        var mailOptions = {
            from: '0083.work@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'Thank you..!!!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        /* End Nodemailer Posrtion */

        res.status(200).json({
            message: 'Email sent successfully',
            status:200,
            data:data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong",
            status:500
        })
    }
}