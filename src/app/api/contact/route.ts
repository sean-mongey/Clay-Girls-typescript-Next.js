import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // claygirlsflims@gmail.com
        pass: process.env.EMAIL_PASSWORD, // App password for Gmail
      },
    });

    // Email content with client's name at the top
    const emailContent = `
Hello Clay Girls,

You have received a new message from your website contact form:

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Clay Girls website contact form.
    `.trim();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'claygirlsflims@gmail.com',
      subject: `Website Contact: ${subject}`,
      text: emailContent,
      replyTo: email, // This allows you to reply directly to the client
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
