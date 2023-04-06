import type { RequestEvent } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import nodemailer from "nodemailer";

export async function POST(requestEvent: RequestEvent) {
  const body = await requestEvent.request.json();

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mathuyrgopal@gmail.com",
      pass: "bctfiadnajwwnvxx",
    },
  });

  const mailDetails = {
    from: body.email,
    to: "ezinorepvtltd@gmail.com",
    subject: body.email + " has sent a new message",
    text: body.message,
  };


  mailTransporter.sendMail(mailDetails, function (err: unknown) {
    if (err) {
      return json({}, { status: 501 });
    } else {
      return json({}, { status: 200 });
    }
  });

  return json({ message: "completed email function" });
}
