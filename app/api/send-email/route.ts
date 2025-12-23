import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FormData, formatEmailSubject, formatEmailBody } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Validate form data
    if (!data.formType) {
      return NextResponse.json(
        { error: "Form type is required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP configuration missing. Please check your .env file.");
      return NextResponse.json(
        { 
          error: "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Get admin email from environment variable
    const adminEmail = process.env.ADMIN_EMAIL || "sanjay@sparixglobal.com";
    
    if (!adminEmail) {
      console.error("ADMIN_EMAIL is not configured in .env file.");
      return NextResponse.json(
        { 
          error: "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Format email content
    const subject = formatEmailSubject(data.formType);
    const htmlBody = formatEmailBody(data);
    const textBody = htmlBody.replace(/<[^>]*>/g, ""); // Plain text version

    // Clean SMTP_HOST to remove any protocol prefixes (http:// or https://)
    // This prevents DNS lookup errors if protocol is accidentally included
    const smtpHost = process.env.SMTP_HOST?.replace(/^https?:\/\//, '').trim() || process.env.SMTP_HOST;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: adminEmail,
      subject: subject,
      html: htmlBody,
      text: textBody,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully. We will contact you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { 
        error: "Failed to submit form. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

