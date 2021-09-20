const express = require("express");
const twilio = require("twilio");

// Send SMS using the Twilio Node.js helper library
const accountSid = "<< your twilio account sid >>";
// Your Account SID from www.twilio.com/console
const authToken = "<< your twilio auth token >>";
// Your Auth Token from www.twilio.com/console

const client = new twilio.RestClient(accountSid, authToken);
client.messages.create(
  {
    body: "Greetings earthling, this is the TwilioSMSbot",
    to: "+12345678901", // Number that receives the SMS
    from: "+12345678901", // Purchase Twilio number that sends the SMS
  },
  function (err, message) {
    console.log(message.sid);
  }
);

const app = express();

app.get("/receive", function (req, res) {
  res.send("Hi, this is the twilioBot listening endpoint.");
});

app.listen(8080, () => {
  console.log("Twilio Bot listening on port 8080");
});
/** If the destination number you will be messaging is an international (non-
US) number, you'll need to enable certain permissions to allow Twilio to perform that
action. */
