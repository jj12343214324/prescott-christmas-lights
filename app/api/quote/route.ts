import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      address,
      city,
      service,
      message,
      preferredContact,
      timeline,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email HTML template
    const emailHtml = `
      <h2>New Quote Request from Prescott Christmas Light Installation</h2>

      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>City:</strong> ${city}</li>
        <li><strong>Preferred Contact:</strong> ${preferredContact || 'Phone'}</li>
      </ul>

      <h3>Service Details:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${service}</li>
        <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
      </ul>

      ${message ? `
        <h3>Additional Message:</h3>
        <p>${message}</p>
      ` : ''}

      <hr>
      <p style="font-size: 12px; color: #666;">
        This quote request was submitted on ${new Date().toLocaleString()} from prescottchristmaslightinstallation.com
      </p>
    `;

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: 'Prescott Christmas Lights <noreply@prescottchristmaslightinstallation.com>',
      to: process.env.BUSINESS_EMAIL || 'info@prescottchristmaslightinstallation.com',
      subject: `New Quote Request: ${name} in ${city}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationHtml = `
      <h2>Thank You for Your Quote Request!</h2>

      <p>Dear ${name},</p>

      <p>We've received your request for Christmas light installation services. Our team will review your information and contact you within 24 hours with a custom quote.</p>

      <h3>What Happens Next?</h3>
      <ol>
        <li>Our design expert will review your property details</li>
        <li>We'll prepare a custom quote based on your needs</li>
        <li>You'll receive a call or email with your quote within 24 hours</li>
        <li>We can schedule a free on-site consultation if needed</li>
      </ol>

      <h3>Your Request Summary:</h3>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Location:</strong> ${address}, ${city}</li>
        <li><strong>Timeline:</strong> ${timeline || 'To be discussed'}</li>
      </ul>

      <p>If you have any immediate questions, please don't hesitate to call us at 928-235-2024.</p>

      <p>Best regards,<br>
      The Prescott Christmas Light Installation Team</p>

      <hr>
      <p style="font-size: 12px; color: #666;">
        This is an automated confirmation email. Please do not reply directly to this message.
      </p>
    `;

    await resend.emails.send({
      from: 'Prescott Christmas Lights <noreply@prescottchristmaslightinstallation.com>',
      to: email,
      subject: 'Quote Request Received - Prescott Christmas Light Installation',
      html: confirmationHtml,
    });

    return NextResponse.json(
      { message: 'Quote request sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}