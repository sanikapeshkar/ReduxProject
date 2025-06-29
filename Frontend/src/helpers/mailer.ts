import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    await User.findByIdAndUpdate(userId, {
      verifyToken: hashedToken,
      verifyTokenExpiry: Date.now() + 3600000, 
    });

    const transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io", 
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER!, 
        pass: process.env.MAILTRAP_PASSWORD!,
      },
    });

    const mailOptions = {
      from: 'sanikapeshkar480.com',
      to: 'sanikapeshkar480@gmail.com',
      subject:
        emailType === "VERIFY"
          ? "Verify your email"
          : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }.</p>`,
      text  : 'check email'
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.error("Email send error:", error.message);
    throw new Error(error.message);
  }
};

