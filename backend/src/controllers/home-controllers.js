import {StatusCodes} from 'http-status-codes';
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const myemail = process.env.myemail;
const mypassword =process.env.mypassword;

console.log(myemail,mypassword)

export function memberData (req,res){
    res.status(StatusCodes.OK).json({
        yourMemebersObj: [
          {
            img: "../../../FrontEnd/Asserts/image/home-page/your-members/vonda.png",
            memName: "Vonda Sanders",
            memSubname: "Sir Gerry Serrano",
          },
          {
            img: "../../../FrontEnd/Asserts/image/home-page/your-members/ronnie.png",
            memName: "Ronnie Ferrell",
            memSubname: "Sir Gerry Serrano",
          },
          {
            img: "../../../FrontEnd/Asserts/image/home-page/your-members/lori.png",
            memName: "Lori Vega",
            memSubname: "Sir Gerry Serrano",
          },
          {
            img: "../../../FrontEnd/Asserts/image/home-page/your-members/annie.png",
            memName: "Annie Trevino",
            memSubname: "Sir Gerry Serrano",
          },
          
        ],
        status: 200
      });
}

export function articleData(req,res){
    res.status(StatusCodes.OK).json({
        articleCarousalObj: [
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
          {
            url: "../../../FrontEnd/Asserts/image/home-page/articles/brown-church.png",
            churchName: "Baptism Sunday of church",
            churchDes:
              "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
            peopleImg: "../../../FrontEnd/Asserts/image/home-page/articles/blue-girl.png"
          },
        ],
        status: 200
      })
}

export function eventData(req,res){
    res.status(StatusCodes.OK).json({
        eventObj: [
          {
            date: "24.12.2023-28.12.2023",
            place: "Russian Federation St. Peter’s Church",
            time: "4:38-8:24",
            url: "../../../FrontEnd/Asserts/image/home-page/events/orange.png",
            eventName: "Mindfulness meditation",
            eventDes:
              "A long established fact that a reader will be distracted by the readable content of...",
          },
          {
            date: "24.12.2023-28.12.2023",
            place: "Russian Federation St. Peter’s Church",
            time: "4:38-8:24",
            url: "../../../FrontEnd/Asserts/image/home-page/events/orange.png",
            eventName: "Mindfulness meditation",
            event_des:
              "A long established fact that a reader will be distracted by the readable content of...",
          },
          {
            date: "24.12.2023-28.12.2023",
            place: "Russian Federation St. Peter’s Church",
            time: "4:38-8:24",
            url: "../../../FrontEnd/Asserts/image/home-page/events/orange.png",
            eventName: "Mindfulness meditation",
            event_des:
              "A long established fact that a reader will be distracted by the readable content of...",
          },
          {
            date: "24.12.2023-28.12.2023",
            place: "Russian Federation St. Peter’s Church",
            time: "4:38-8:24",
            url: "../../../FrontEnd/Asserts/image/home-page/events/orange.png",
            eventName: "Mindfulness meditation",
            event_des:
              "A long established fact that a reader will be distracted by the readable content of...",
          },
        ],
        status: 200
      })
}

export function subscribes(req,res){
  sendMail(req.body.email);
}

// function sendMail(emailReq){
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: 'britney.reichert0@ethereal.email',
//       pass: 'PduXTPgJNUMMUdQsyV'
//     }
//   });
  
//   // async..await is not allowed in global scope, must use a wrapper
//   async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"Maddison Foo Koch 👻" <britney.reichert0@ethereal.email>', // sender address
//       to: "alok@itobuz.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     console.log(nodemailer.getTestMessageUrl(info))
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//   }



//   main().catch(console.error);
// }

function sendMail(emailUser){

  let configMail = {
    service : 'gmail',
    auth : {
      user :myemail,
      pass : mypassword
    }
  } 

  let transpoter = nodemailer.createTransport(configMail);

  let Mailgenerator = new Mailgen({
    theme:'default',
    product : {
      name :"Team Shrine",
      link :'https://www.npmjs.com/package/nodemailer',
    }

  })

  let response ={
    body : {
      name :"Subscriber",
      intro:'Welcome to shrine, we are happy to have you on board!',
      action: {
        instructions: 'To view churches, please click here:',
        button: {
            color: '#22BC66', 
            text: 'Newsletter',
            link: 'https://www.npmjs.com/package/nodemailer'
        }
    }
    }
  }

  let mail = Mailgenerator.generate(response);

  let message  ={
    from:myemail,
    to:emailUser,
    subject:"Successful subscription",
    html :mail
  }

  transpoter.sendMail(message);

}