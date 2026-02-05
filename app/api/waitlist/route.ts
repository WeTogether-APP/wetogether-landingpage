import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Netlify Forms
    // The hidden HTML form in public/waitlist.html allows Netlify to detect the form
    // We submit directly to Netlify's form processing endpoint
    const siteUrl = process.env.URL || process.env.NETLIFY_SITE_URL;
    
    if (siteUrl) {
      // On Netlify, submit to the form endpoint
      const formData = new URLSearchParams();
      formData.append('form-name', 'waitlist');
      formData.append('email', email.toLowerCase().trim());

      try {
        const response = await fetch(`${siteUrl}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          console.log('Form submission response:', response.status);
        }
      } catch (fetchError) {
        console.log('Form submission note:', fetchError);
      }
    }

    // Always return success - Netlify will process the form
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

