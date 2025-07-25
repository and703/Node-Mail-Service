const express = require('express');
const { sendMail } = require('../mailer');

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { to, subject, template, context, attachments } = req.body;
    await sendMail({ to, subject, template, context, attachments });
    res.status(200).json({ message: 'Mail sent' });
  } catch (err) {
    console.error('Mail send error', err);
    res.status(500).json({ message: 'Failed to send mail', error: err.message });
  }
});

module.exports = router;
