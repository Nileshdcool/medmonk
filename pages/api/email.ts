import { EmailTemplate } from "@/Constants/ContactUs/EmailTemplate";
import { EmailRequest } from "@/Interfaces/email/EmailRequest";
import Send from "@/services/email/sendgridEmailService";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(405).json({
      message: "Method Not Allowed",
      success: false,
    });
  } else if (req.method === "POST") {
    const {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Organization,
      Subject,
      Message,
    } = req.body;
    console.log(req.body);
    const emailRequest: EmailRequest = {
      From: process.env.From_Email || "",
      To: process.env.To_Email || "",
      Subject: "Medmonk Email",
      Body: EmailTemplate({
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Organization,
        Subject,
        Message,
      }),
    };

    try {
      await Send(emailRequest);
      return res.status(200).json({
        message: "Message sent successfully",
        success: true,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong when trying to send email",
        success: false,
      });
    }
  } else {
    res.status(405).json({
      message: "Method Not Allowed",
      success: false,
    });
  }
}
