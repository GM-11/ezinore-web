import { j as json } from './index-36410280.js';
import nodemailer from 'nodemailer';

async function POST(requestEvent) {
  const body = await requestEvent.request.json();
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mathuyrgopal@gmail.com",
      pass: "bctfiadnajwwnvxx"
    }
  });
  const mailDetails = {
    from: body.email,
    to: "connect@ezinore.com",
    subject: body.email + " has sent a new message",
    text: body.message
  };
  mailTransporter.sendMail(mailDetails, function(err) {
    if (err) {
      return json({}, { status: 501 });
    } else {
      return json({}, { status: 200 });
    }
  });
  return json({ message: "completed email function" });
}

export { POST };
//# sourceMappingURL=_server.ts-e97ac492.js.map
