const nodemailer=require("nodemailer");
/*const mailgun= require('nodemailer-mailgun-transport');

const auth= {
    auth: {
        api_key:'05050b40719443edc04653cebd9409e1-a65173b1-4f9412e3';
        domain:'sandbox9ca6e114af0243caa9ac0d0f9d1d0f3d.mailgun.org'
    }
};
*/
 const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
      auth: {
        user: 'kulvinderkakar14@gmail.com',
        pass: 'kakar1995'
      }
    });

const sendMail=(email)=>{
const mailOptions = {
  from:'kulvinderkakar14@gmail.com',
    to:email,
    subject:'FoodieAndHealthy',
    text:'Thanks for your valuable feedback! We will be working on your feedback to keep you happy always!'
};

transporter.sendMail(mailOptions,function(err,data){
   if(err) {
       console.log('Error in sending feedback response');
   } else {
       console.log('Message sent');
   }
});
    
}
module.exports=sendMail;
/*const nodemailer = require('nodemailer');
    const senderMail = "kulvinderkakar14@gmail.com";
    const emailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kulvinderkakar14@gmail.com',
        pass: 'kakar1995'
      }
    });
    function getMailReceivers(mailReceivers){ // convert the string array to one string
      var receivers = "";
      for(var i = 0; i < mailReceivers.length; i++){
        receivers += mailReceivers[i];
        if(i < mailReceivers.length - 1)
            receivers += ", ";
      }
      return receivers;
    }
    function getMailOptions(mailReceivers, subject, html){ // set the mail options and return them
      return {
        from: senderMail,
        to: getMailReceivers(mailReceivers),
        subject: subj,
        html: content
      };
    }
    
    module.exports = { // export the sendMail function here

  sendHtmlMail: function(mailReceivers, subject, html){ // send the email
    emailTransporter.sendMail(getMailOptions(mailReceivers, subject, html), function(error, info){
      if (error) {
        throw error;
      } else {
        console.log(info.response);
      }
    });
  }
};*/
