// src/utils/Email.ts

import nodemailer from "nodemailer";

interface EmailDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  from: string;
  to: string;
  subject: string;
}

const sendEmail = async (details: EmailDetails) => {
  const name = details.firstName + " " + details.lastName;
  try {
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ravisachin36@gmail.com",
        pass: "wwpc muwq otse wlig",
      },
    });

    const mailOptions = {
      from: details.from,
      to: details.to,
      subject: details.subject,
      html: `<html>
      <head>
        <title>Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0;">
        <div style="width: 100%; max-width: 600px; margin: 0 auto; background: linear-gradient(90.21deg, #d0d2ff -5.91%, #fdfbd4 111.58%); padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          
          <!-- Header section with logo and text -->
          <div style="display: flex;gap:30px; justify-content: space-between; align-items: center; padding: 30px; background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%); color: white; border-radius: 8px 8px 0 0;">
            
            <!-- Logo Section -->
            <img src="cid:logo" alt="Your Logo" style="width: 80px; height: auto;" />
    
            <!-- Text Section -->
            <div style="text-align: start;">
              <h2 style="font-size: 32px; font-weight: bold; margin: 10px 0;">Welcome to My Portfolio</h2>
              <p style="font-size: 16px; font-style: italic; margin: 0 0 15px;">A glimpse into my creative world where passion meets skill.</p>
            </div>
          </div>
    
          <!-- Message content -->
          <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              <strong>Email:</strong> ${details.email}
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              <strong>Phone:</strong> ${details.phone}
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              <strong>Message:</strong>
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            ${details.message}
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              --- <strong>Thank you for your message!</strong> ---
            </p>
          </div>
    
          <!-- Footer text -->
          <div style="text-align: center; font-size: 14px; color: #777; padding-top: 20px; border-top: 1px solid #f0f0f0;">
            <p>Sent from your portfolio contact form.</p>
          </div>
        </div>
      </body>
    </html>
    `,
      attachments: [
        {
          filename: "FavIcon.png",
          path: "./src/assets/img/FavIcon.png",
          cid: "logo",
          encoding: "base64",
        },
      ],
    };

    const info = await contactEmail.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Unable to send email");
  }
};

export default sendEmail;
