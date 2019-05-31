const twilioInfo = require('../twilioInfo.js');

const client = require('twilio')(twilioInfo.TWILIO_ACCOUNT_SID, twilioInfo.TWILIO_AUTH_TOKEN);

exports.messageMe = (data, cb) => {
    
    client.messages.create(
    {
        to: twilioInfo.MYPHONENUMBER,
        from: twilioInfo.TWILIONUMBER,
        body: `Email: ${data.email}, PhoneNumber: ${data.phoneNumber}, Comments: ${data.comment}`
    },
    cb
    );
}