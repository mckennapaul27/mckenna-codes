import { NextResponse } from 'next/server';

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const nodemailer = require('nodemailer');
const nodeMailerPass = process.env.nodeMailerPass;
const nodeMailerUser = process.env.nodeMailerUser;

console.log('nodeMailerUser', nodeMailerUser);
console.log('nodeMailerPass', nodeMailerPass);

// smtppro.zoho.eu
// imappro.zoho.eu

const transporter = nodemailer.createTransport({
    // host: 'smtp.zoho.eu',
    // host: 'smtppro.zoho.eu',
    host: 'smtppro.zoho.com', // for some reason this works
    port: 465,
    secure: true, //ssl
    auth: {
        user: nodeMailerUser,
        pass: nodeMailerPass,
    },
});

export const POST = async (request: any) => {
    try {
        // console.log('request', request);
        const req_body = await request.json();
        const { name, email, phone, message, budget, preferredContactMethod } =
            req_body;
        console.log('req_body', req_body);
        const date = dayjs().tz('Europe/London').format('MMM D, YYYY h:mm A');
        if (!name || !email || !message) {
            return new NextResponse(
                JSON.stringify({
                    msg: 'Please fill in all fields',
                }),
                { status: 400 }
            );
        }

        let mailOptions = {
            from: {
                name: 'Paul McKenna',
                address: nodeMailerUser,
            },
            to: email, // list of receivers (who receives)
            // cc: nodeMailerUser,
            subject: `Thanks for getting in touch`, // Subject line
            replyTo: email,
            html: `<b>Date: ${date}</b> <p>Hi ${name}</p> <p>Thanks for getting in touch.</p> <p>I have received your enquiry and will be in contact very soon.</p> <p>Email: ${email}</p> <p>Name: ${name}</p> ${
                phone ? `<p>Phone: ${phone}</p>` : ''
            }<p>Enquiry: ${message}</p><p>Kind Regards,</p><p>Paul McKenna</p>`, // html body
        };

        // console.log('mailOptions', mailOptions);

        let mailOptions2 = {
            from: {
                name: 'McKenna Codes',
                address: nodeMailerUser,
            },
            to: nodeMailerUser,
            subject: `** Contact Form Submission **`, // Subject line
            replyTo: email,
            html: `<b>Date: ${date}</b> <p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p> <p>Budget: ${
                budget ? budget : 'Not specified'
            }</p><p>Preferred contact: ${
                preferredContactMethod ? preferredContactMethod : 'email'
            }</p> <p>Enquiry: ${message}</p>`, // html body
        };

        const send_to_user = await transporter.sendMail(mailOptions);
        if (send_to_user.rejected.length > 0) {
            throw { status: 404, message: 'Rejected' };
        }
        const send_to_me = await transporter.sendMail(mailOptions2);
        if (send_to_me.rejected.length > 0) {
            throw { status: 404, message: 'Rejected' };
        }
        return new NextResponse(
            JSON.stringify({
                msg: 'Email sent successfully',
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log('error sending contact form', error);
        return new NextResponse(
            JSON.stringify({
                msg: error instanceof Error ? error.message : String(error),
            }),
            {
                status: 500,
            }
        );
    }
};
