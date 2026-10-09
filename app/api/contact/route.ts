import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { fullName, email, subject, message } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json(
        { error: 'Please enter your full name.' },
        { status: 400 }
      );
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Please enter your email address.' },
        { status: 400 }
      );
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Please enter a message.' },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Read SMTP settings from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom =
      process.env.SMTP_FROM ||
      `"Portfolio Contact" <${smtpUser || 'no-reply@sherazdev.com'}>`;
    const contactEmail =
      process.env.CONTACT_EMAIL || 'sherazofficialdev@gmail.com';

    // Verify SMTP is configured
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.warn(
        'SMTP credentials are not yet configured in environment variables.'
      );
      return NextResponse.json(
        {
          error:
            'Email service is not yet configured. Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD in your environment variables.',
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const mailOptions = {
      from: smtpFrom,
      to: contactEmail,
      replyTo: `${fullName.trim()} <${email.trim()}>`,
      subject: `[Portfolio Inquiry] ${
        subject ? subject.trim() : 'New Project Inquiry'
      } - from ${fullName.trim()}`,
      text: `New contact form submission:\n\nSender Name: ${fullName.trim()}\nSender Email: ${email.trim()}\nSubject: ${
        subject ? subject.trim() : 'N/A'
      }\nDate: ${new Date().toLocaleString()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18191c; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2563EB; border-bottom: 2px solid #F97316; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr>
              <td style="padding: 6px 0; width: 130px; font-weight: bold; color: #64748b;">Sender Name:</td>
              <td style="padding: 6px 0; color: #18191c; font-weight: 600;">${fullName
                .trim()
                .replace(/</g, '&lt;')}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Sender Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email.trim()}" style="color: #2563EB;">${email
                .trim()
                .replace(/</g, '&lt;')}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 6px 0; color: #18191c;">${(
                subject ? subject.trim() : 'Not specified'
              ).replace(/</g, '&lt;')}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Date & Time:</td>
              <td style="padding: 6px 0; color: #64748b;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #18191c; margin-bottom: 8px;">Message:</h3>
          <div style="background-color: #f8f9fa; padding: 16px; border-radius: 6px; border-left: 4px solid #2563EB; white-space: pre-wrap; color: #18191c;">${message
            .trim()
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (err: any) {
    console.error('SMTP Delivery Error:', err);
    return NextResponse.json(
      {
        error: `Failed to deliver email through SMTP: ${
          err.message || 'Server error'
        }. Please check your SMTP credentials.`,
      },
      { status: 500 }
    );
  }
}
