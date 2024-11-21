import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { email, service, description } = req.body;

  if (!email || !service || !description) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    // Configure Nodemailer with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // Use TLS
      auth: {
        user: "your-email@yourdomain.com", // Your Zoho email
        pass: "your-app-password", // App-specific password
      },
    });

    // Email details
    await transporter.sendMail({
      from: `"TRUSTON Contact Form" <your-email@yourdomain.com>`, // Sender address
      to: "your-email@yourdomain.com", // Replace with your email
      subject: `New Contact Form Submission - ${service}`,
      text: `You received a new message from ${email}.\n\nService: ${service}\n\nMessage:\n${description}`,
    });

    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).send({ message: "Failed to send email" });
  }
}
