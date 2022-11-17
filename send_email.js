// Send an email from the nodemailer server in Node.js with
// command-line arguments

var nodemailer = require('nodemailer')

var my_address = ''
var my_app_password = ''

var transporter = nodemailer.createTransport({
	host: 'smtp.mail.yahoo.com',
	port: 587,
	service: 'yahoo',
	secure: 'false',
	auth: {
		user: my_address,
		pass: my_app_password
	}
});

const inputArgs     = process.argv.slice(2);
const theAddress    = inputArgs[0];
const theSubject    = inputArgs[1];
const theContent    = inputArgs[2];
const theAttachment = inputArgs[3];

console.log("We will be sending a mail to: ", theAddress)

var mailOptions = {
	from: my_address,
	to: theAddress,
	subject: theSubject,
	text: theContent,
	attachments: [{
		path: theAttachment
	}]
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
