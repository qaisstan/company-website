import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, service, description } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465, // SSL
      secure: true, // Use SSL
      auth: {
        user: "contact@truston.dev", // Your Zoho email
        pass: "your-zoho-password", // Your Zoho app-specific password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: "contact@truston.dev", // From your Zoho email
        to: "contact@truston.dev", // Where inquiries are sent
        subject: `New Inquiry from ${email}`,
        html: `
          <h2>New Inquiry</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
