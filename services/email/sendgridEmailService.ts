import { EmailRequest } from "@/Interfaces/email/EmailRequest";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : ""
);

export default async function Send(req: EmailRequest) {
  const msg = {
    to: req.To,
    from: req.From,
    subject: req.Subject,
    text: `Message From Medmonk`,
    html: req.Body,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    return false;
  }
}
