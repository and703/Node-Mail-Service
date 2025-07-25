const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const config = require('./config');

const transport = nodemailer.createTransport(config.smtp);

const handlebarOptions = {
  viewEngine: {
    extname: '.hbs',
    partialsDir: path.resolve('./templates'),
    layoutsDir: path.resolve('./templates'),
    defaultLayout: '',
  },
  viewPath: path.resolve('./templates'),
  extName: '.hbs',
};

transport.use('compile', hbs(handlebarOptions));

function sendMail({ to, subject, template, context = {}, attachments = [] }) {
  const mailOptions = {
    from: config.mailFrom,
    to,
    subject,
    template,
    context,
    attachments,
  };
  return transport.sendMail(mailOptions);
}

module.exports = { sendMail };
