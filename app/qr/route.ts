import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  try {
    // Get IP address
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'Unknown';

    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Get referer
    const referer = request.headers.get('referer') || 'Direct visit';

    // Get timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Phoenix',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    // Send email notification
    await resend.emails.send({
      from: 'QR Code Tracker <onboarding@resend.dev>',
      to: 'prescottchristmaslights@gmail.com',
      subject: 'QR Code Scanned - New Visitor',
      html: `
        <h2>QR Code Scan Detected</h2>
        <p><strong>Time:</strong> ${timestamp}</p>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>Referer:</strong> ${referer}</p>
      `
    });

    // Redirect to homepage
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error('Error tracking visit:', error);
    // Still redirect even if tracking fails
    return NextResponse.redirect(new URL('/', request.url));
  }
}
