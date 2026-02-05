import { NextRequest, NextResponse } from 'next/server';
import { addToWaitlist, getWaitlist } from '@/lib/waitlist-storage';

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

    // Add to waitlist (will throw if email already exists)
    try {
      const entry = await addToWaitlist(email);
      const allEntries = await getWaitlist();
      
      console.log('New waitlist entry:', entry);
      console.log('Total waitlist entries:', allEntries.length);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully added to waitlist',
          totalEntries: allEntries.length 
        },
        { status: 200 }
      );
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already registered') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error processing waitlist entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to view waitlist entries (remove in production)
export async function GET() {
  try {
    const entries = await getWaitlist();
    return NextResponse.json(
      { 
        entries,
        total: entries.length 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

