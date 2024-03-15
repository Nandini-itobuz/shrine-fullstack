import { StatusCodes } from 'http-status-codes';
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import fs from 'fs';
const  {dirname} = import.meta;

const allMembersData = JSON.parse(fs.readFileSync(`${dirname}/../Database/MembersDb.json`));
const memberDataView = allMembersData.slice(0,4);
const allArticelData = JSON.parse(fs.readFileSync(`${dirname}/../Database/ArticlesDb.json`));
const allEventData = JSON.parse(fs.readFileSync(`${dirname}/../Database/EventsDb.json`));
const myemail = process.env.myemail;
const mypassword = process.env.mypassword;

export function memberData(req, res) {
  res.status(StatusCodes.OK).json({
    yourMemebersObj: memberDataView,
    status: 200
  });
}

export function articleData(req, res) {
  res.status(StatusCodes.OK).json({
    articleCarousalObj: allArticelData,
    status: 200
  })
}

export function eventData(req, res) {
  res.status(StatusCodes.OK).json({
    eventObj: allEventData,
    status: 200
  })
}

export function subscribes(req, res) {
  sendMail(req.body.email);
}

function sendMail(emailUser) {

  let configMail = {
    service: 'gmail',
    auth: {
      user: myemail,
      pass: mypassword
    }
  }

  let transpoter = nodemailer.createTransport(configMail);

  let Mailgenerator = new Mailgen({
    theme: 'default',
    product: {
      name: "Team Shrine",
      link: 'https://www.npmjs.com/package/nodemailer',
    }

  })

  let response = {
    body: {
      name: "Subscriber",
      intro: 'Welcome to shrine, we are happy to have you on board!',
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

  let message = {
    from: myemail,
    to: emailUser,
    subject: "Successful subscription",
    html: mail
  }

  transpoter.sendMail(message);

}