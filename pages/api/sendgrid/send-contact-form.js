import sgMail from '@sendgrid/mail'

export default async function Handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { title, name, email, message } = req.body

  const content = {
    to: process.env.SENDGRID_EMAIL_RECIPIANT,
    from: process.env.SENDGRID_EMAIL_RECIPIANT,
    subject: `New Message From - ${email}`,
    templateId: 'd-deefeeea1edf44d3842cb9bc496f0bc0',
    dynamicTemplateData: {
      title: title,
      name: name,
      email: email,
      message: message
    },
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}