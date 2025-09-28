import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, city, service, message, preferredContact, timeline } = body;

    // Create the email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534;">New Quote Request - Prescott Christmas Lights</h2>

        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
          ${preferredContact ? `<p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>` : ''}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        </div>

        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Service Requested</h3>
          <p>${service || 'Christmas Light Installation'}</p>
        </div>

        ${message ? `
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Additional Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        ` : ''}

        <hr style="border: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          This quote request was submitted from the Prescott Christmas Light Installation website.
        </p>
      </div>
    `;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Prescott Lights <onboarding@resend.dev>',
      to: process.env.EMAIL_TO?.split(',') || ['delivered@resend.dev'],
      subject: `New Quote Request from ${name}`,
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