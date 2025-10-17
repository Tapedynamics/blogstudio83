import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json(
        { error: 'Configurazione server non valida' },
        { status: 500 }
      );
    }

    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Default list ID for Brevo (you can change this later)
        updateEnabled: true, // Update if contact already exists
        emailBlacklisted: false, // Allow email sending
        smsBlacklisted: false, // Allow SMS (if needed)
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      // If contact already exists, treat as success
      if (errorData.code === 'duplicate_parameter') {
        return NextResponse.json({
          success: true,
          message: 'Sei già iscritto alla newsletter!',
        });
      }

      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Errore durante l\'iscrizione. Riprova più tardi.' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Iscrizione completata! Controlla la tua email.',
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'iscrizione. Riprova più tardi.' },
      { status: 500 }
    );
  }
}
