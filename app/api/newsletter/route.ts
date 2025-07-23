import { NextRequest, NextResponse } from 'next/server';
import { addContactToBrevo } from '../../setate/brevo-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Add contact to Brevo
    const result = await addContactToBrevo({
      email: email.toLowerCase().trim(),
      firstName: firstName?.trim(),
      lastName: lastName?.trim(),
      attributes: {
        SIGNUP_SOURCE: 'Website Newsletter Popup',
        SIGNUP_DATE: new Date().toISOString(),
        IP_ADDRESS: request.ip || 'unknown'
      }
    });

    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: result.message,
          contactId: result.contactId 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Newsletter API endpoint is working' },
    { status: 200 }
  );
} 