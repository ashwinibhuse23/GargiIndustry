import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({ path: path.resolve(__dirname, "../.env") });
  dotenv.config();
} catch (e) {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const getSmtpCredentials = () => {
  const user = (
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.GMAIL_USER ||
    process.env.SMTP_EMAIL ||
    "infogargiengineering@gmail.com"
  ).trim();

  // Check all possible environment variable names the user might have configured, with fallback
  const rawPass =
    process.env.SMTP_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD ||
    process.env.EMAIL_APP_PASSWORD ||
    process.env.EMAIL_PASS ||
    process.env.EMAIL_PASSWORD ||
    process.env.APP_PASSWORD ||
    "fced mcel piyu eccw";

  // Strip quotes (single/double) and any internal spaces (Google App Passwords have 4-character spaces like 'abcd efgh ijkl mnop')
  const pass = rawPass.replace(/['"\s]/g, "");

  const passEnvSource = process.env.SMTP_APP_PASSWORD
    ? "SMTP_APP_PASSWORD"
    : process.env.SMTP_PASS
      ? "SMTP_PASS"
      : process.env.SMTP_PASSWORD
        ? "SMTP_PASSWORD"
        : process.env.GMAIL_APP_PASSWORD
          ? "GMAIL_APP_PASSWORD"
          : process.env.EMAIL_PASS
            ? "EMAIL_PASS"
            : process.env.EMAIL_PASSWORD
              ? "EMAIL_PASSWORD"
              : process.env.APP_PASSWORD
                ? "APP_PASSWORD"
                : "default_fallback";

  return { user, pass, passEnvSource };
};

const getTransporter = () => {
  const { user, pass, passEnvSource } = getSmtpCredentials();

  if (!user || !pass) {
    throw new Error(
      `SMTP credentials not configured. Please add SMTP_USER and SMTP_APP_PASSWORD. (Detected: user=${user ? "OK" : "MISSING"}, pass=${pass ? "OK" : "MISSING"}, source=${passEnvSource})`,
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

const getReceiverEmail = () => {
  return (
    process.env.RECEIVER_EMAIL ||
    process.env.DESTINATION_EMAIL ||
    process.env.SMTP_USER ||
    "pebgargiengineering@gmail.com"
  ).trim();
};

if (!process.env.VERCEL) {
  try {
    const transporter = getTransporter();
    transporter.verify((error) => {
      if (error) {
        console.error("❌ SMTP Connection Error:", error.message);
      } else {
        console.log(
          "✅ SMTP Transporter connected successfully and ready to send emails.",
        );
      }
    });
  } catch (err) {
    console.warn("⚠️ SMTP Transporter warning:", err.message);
  }
}

app.get(["/api/health", "/health", "/api", "/"], (req, res) => {
  const { user, pass, passEnvSource } = getSmtpCredentials();
  res.status(200).json({
    status: "ok",
    message: "Gargi Industry Email API is running smoothly.",
    smtp_diagnostic: {
      user_configured: Boolean(user),
      user_email: user
        ? `${user.substring(0, 3)}***@${user.split("@")[1] || "gmail.com"}`
        : "not set",
      password_configured: Boolean(pass && pass.length > 0),
      password_length: pass ? pass.length : 0,
      detected_from_env_key: passEnvSource,
      receiver_email: getReceiverEmail(),
    },
  });
});

const generateMessageId = () => {
  const randomStr = Math.random().toString(36).substring(2, 12);
  const timestamp = Date.now();
  return `<${timestamp}.${randomStr}@mail.gmail.com>`;
};

app.post(["/api/consultation", "/consultation"], async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      serviceInterest,
      projectType,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !company) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill in all required fields (Full Name, Email, Phone, Company).",
      });
    }

    const plainText = `
New Technical Consultation Request: ${fullName}

Contact Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Company: ${company}
- Service Interest: ${serviceInterest || "PEB Design & Structural Engineering"}
- Project Scope: ${projectType || "Industrial Facility / Plant"}

Client Message:
${message ? message : "No additional description provided."}

Submitted via Gargi Engineering Services Website on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = (process.env.SMTP_USER || "infogargiengineering@gmail.com").trim();

    const mailOptions = {
      from: `"Gargi Engineering" <${senderEmail}>`,
      to: getReceiverEmail(),
      subject: `New Technical Consultation Request from ${fullName}`,
      messageId: generateMessageId(),
      text: plainText,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222222; line-height: 1.6;">
          <div style="border-bottom: 2px solid #0b1e38; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0b1e38; font-size: 20px;">New Technical Consultation Request</h2>
            <p style="margin: 4px 0 0; color: #666666; font-size: 13px;">Gargi Engineering Services</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 140px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #111111; font-weight: bold;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Phone / Mobile:</td>
              <td style="padding: 8px 0; color: #111111;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Company / Org:</td>
              <td style="padding: 8px 0; color: #111111;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Service Interest:</td>
              <td style="padding: 8px 0; color: #111111;">${serviceInterest || "PEB Design & Structural Engineering"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px 0; color: #111111;">${projectType || "Industrial Facility / Plant"}</td>
            </tr>
          </table>

          <div style="background-color: #f7f9fc; border-left: 4px solid #0b1e38; padding: 14px 16px; margin-bottom: 24px; border-radius: 4px;">
            <strong style="color: #333333; font-size: 13px; display: block; margin-bottom: 6px;">Client Message / Brief:</strong>
            <div style="color: #222222; font-size: 14px; white-space: pre-line;">${message || "No additional description provided."}</div>
          </div>

          <div style="margin-bottom: 24px;">
            <a href="mailto:${email}?subject=Re: Technical Consultation - Gargi Engineering Services" style="display: inline-block; background-color: #0b1e38; color: #ffffff; padding: 10px 22px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">
              Reply to ${fullName} (${email})
            </a>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 12px; color: #888888;">
            Sent from Gargi Engineering Services Website on ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Consultation email for "${fullName}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Consultation request sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending consultation email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process consultation request.",
    });
  }
});

app.post(["/api/contact", "/contact"], async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in Name, Email, and Message.",
      });
    }

    const plainText = `
New Website Contact Message from ${name}

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Company: ${company || "Not provided"}
- Service Interest: ${service || "PEB Structural Design & Analysis"}

Message:
${message}

Submitted via Gargi Engineering Services Website on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = (process.env.SMTP_USER || "infogargiengineering@gmail.com").trim();

    const mailOptions = {
      from: `"Gargi Engineering" <${senderEmail}>`,
      to: getReceiverEmail(),
      subject: `New Website Message from ${name}`,
      messageId: generateMessageId(),
      text: plainText,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222222; line-height: 1.6;">
          <div style="border-bottom: 2px solid #0b1e38; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0b1e38; font-size: 20px;">New Website Contact Message</h2>
            <p style="margin: 4px 0 0; color: #666666; font-size: 13px;">Gargi Engineering Services</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 140px; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0; color: #111111; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #111111;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #111111;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Service Interest:</td>
              <td style="padding: 8px 0; color: #111111;">${service || "PEB Structural Design & Analysis"}</td>
            </tr>
          </table>

          <div style="background-color: #f7f9fc; border-left: 4px solid #0b1e38; padding: 14px 16px; margin-bottom: 24px; border-radius: 4px;">
            <strong style="color: #333333; font-size: 13px; display: block; margin-bottom: 6px;">Message:</strong>
            <div style="color: #222222; font-size: 14px; white-space: pre-line;">${message}</div>
          </div>

          <div style="margin-bottom: 24px;">
            <a href="mailto:${email}?subject=Re: Website Inquiry - Gargi Engineering Services" style="display: inline-block; background-color: #0b1e38; color: #ffffff; padding: 10px 22px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">
              Reply to ${name} (${email})
            </a>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 12px; color: #888888;">
            Sent from Gargi Engineering Services Website on ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Contact inquiry for "${name}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process contact message.",
    });
  }
});

app.post(["/api/brochure", "/brochure"], async (req, res) => {
  try {
    const { fullName, email, phone, company, designation, serviceInterest } =
      req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name and email.",
      });
    }

    const plainText = `
New Brochure Download Request from ${fullName}

Contact Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Company: ${company || "Not provided"}
- Designation: ${designation || "Not provided"}
- Service Interest: ${serviceInterest || "PEB Design & Engineering"}

Submitted via Gargi Engineering Services Website on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = (process.env.SMTP_USER || "infogargiengineering@gmail.com").trim();

    const mailOptions = {
      from: `"Gargi Engineering" <${senderEmail}>`,
      to: getReceiverEmail(),
      subject: `New Brochure Download Request from ${fullName}`,
      messageId: generateMessageId(),
      text: plainText,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222222; line-height: 1.6;">
          <div style="border-bottom: 2px solid #0b1e38; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0b1e38; font-size: 20px;">New Brochure Download Request</h2>
            <p style="margin: 4px 0 0; color: #666666; font-size: 13px;">Gargi Engineering Services</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 140px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #111111; font-weight: bold;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #111111;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #111111;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Designation:</td>
              <td style="padding: 8px 0; color: #111111;">${designation || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Service Interest:</td>
              <td style="padding: 8px 0; color: #111111;">${serviceInterest || "PEB Design & Engineering"}</td>
            </tr>
          </table>

          <div style="margin-bottom: 24px;">
            <a href="mailto:${email}?subject=Re: Brochure Download Request - Gargi Engineering Services" style="display: inline-block; background-color: #0b1e38; color: #ffffff; padding: 10px 22px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">
              Reply to ${fullName} (${email})
            </a>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; font-size: 12px; color: #888888;">
            Sent from Gargi Engineering Services Website on ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Brochure lead for "${fullName}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Brochure lead recorded successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending brochure lead email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process brochure request.",
    });
  }
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(
      `🚀 Gargi Industry SMTP Server is running on http://localhost:${PORT}`,
    );
  });
}

export default app;
