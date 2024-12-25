const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name)=>{
sgMail.send({
    to : email,
    from : 'himanijhj99@gmail.com',
    subject : 'Thanks for choosing task manager ! ',
    text : 'Welcome to the app, '+ name +'. Let me know how you get along with the app.'
})
}

const sendCancelMail = (email,name)=>{
    sgMail.send({
        to : email,
        from : 'himanijhj99@gmail.com',
        subject : 'You have deleted your account ! ',
        text : 'You have deleted you account, '+ name +'. Please provide your valuable feedback as to how we can improve. You can always create a new account.'
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelMail
}
