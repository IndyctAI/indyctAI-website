exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Alle velden zijn verplicht' })
      };
    }

    // For now, we'll use a simple response
    // In production, you would integrate with an email service like SendGrid, Mailgun, etc.
    
    // Simulate email sending
    console.log('Email would be sent to:', 'indyctai@gmail.com');
    console.log('From:', name, email);
    console.log('Message:', message);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.' 
      })
    };

  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Er is een fout opgetreden bij het versturen van uw bericht' })
    };
  }
};

