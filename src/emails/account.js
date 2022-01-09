const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jashankhangura10@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jashankhangura10@gmail.com',
        subject: 'Your account has been deleted',
        text: `Sad to see you go ${name}. Tell us how we can improve our service.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}