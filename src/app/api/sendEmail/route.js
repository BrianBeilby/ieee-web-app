import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "New inquiry from IEEE club website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully! We will get back to you soon.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in sendEmail route: ", error);
    return Response.json(
      {
        success: false,
        message: "Error in sendEmail route",
      },
      {
        status: 500,
      }
    );
  }
}
