import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/app/models/contact';

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    
    const { fullName, email, service, otherService, description } = body;

    // Validation
    if (!fullName || !email || !service || !description) {
      return NextResponse.json(
        { message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      fullName,
      email,
      service: service === 'Other' ? otherService : service,
      otherService: service === 'Other' ? otherService : undefined,
      description,
      status: 'pending'
    });

    await newContact.save();

    // You could add email notification here
    // await sendNotificationEmail(newContact);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

// Add GET method to retrieve contacts (with proper authentication)
export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Add authentication check here
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    // }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { message: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
} 