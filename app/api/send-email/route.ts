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

    // Debug: Log SMTP_HOST value to identify issues
    console.log("=== SMTP Configuration Debug ===");
    console.log("SMTP_HOST (raw):", process.env.SMTP_HOST);
    console.log("SMTP_HOST length:", process.env.SMTP_HOST?.length);
    console.log("SMTP_HOST first 30 chars:", process.env.SMTP_HOST?.substring(0, 30));
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_FROM:", process.env.SMTP_FROM);
    console.log("ADMIN_EMAIL:", adminEmail);

    // Clean SMTP_HOST to remove any protocol prefixes (http:// or https://)
    // This prevents DNS lookup errors if protocol is accidentally included
    const smtpHost = process.env.SMTP_HOST?.replace(/^https?:\/\//, '').trim() || process.env.SMTP_HOST;
    console.log("SMTP_HOST (cleaned):", smtpHost);
    console.log("================================");

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
    console.error("=== Error processing form submission ===");
    console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("Error message:", error instanceof Error ? error.message : String(error));
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    if (error instanceof Error && 'code' in error) {
      console.error("Error code:", (error as any).code);
      console.error("Error hostname:", (error as any).hostname);
      console.error("Error syscall:", (error as any).syscall);
    }
    console.error("======================================");
    
    return NextResponse.json(
      { 
        error: "Failed to submit form. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

