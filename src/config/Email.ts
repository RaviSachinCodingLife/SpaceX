import emailjs from "@emailjs/browser";

export interface EmailFormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (details: EmailFormDetails) => {
  const serviceId = "service_nn9c2nm";
  const templateId = "template_zgbf3zb";
  const publicKey = "ITDzQ5qYFLtpbAJ9I";

  console.log({ details });

  const templateParams = {
    from_name: `${details.firstName} ${details.lastName}`,
    from_email: details.email,
    to_email: "ravisachin36@gmail.com",
    subject: "You've Got a New Inquiry – Contact Form Submission",
    phone: details.phone,
    message: details.message,
  };

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return result;
  } catch (error) {
    console.error("Error sending email:", error, templateParams);
    throw new Error("Unable to send email");
  }
};
