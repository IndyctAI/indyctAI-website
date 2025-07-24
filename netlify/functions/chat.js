exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    
    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Je bent een AI-assistent voor IndyctAI, een Nederlands AI-consultancy bedrijf. Je helpt bezoekers met vragen over AI, machine learning, en hoe IndyctAI hun bedrijf kan helpen. 

Belangrijke informatie over IndyctAI:
- Gespecialiseerd in AI-strategie, machine learning oplossingen, procesautomatisering
- Biedt gratis strategiegesprekken aan
- Heeft ervaring met 50+ bedrijven
- Implementatietijd: 2-6 maanden, start met Proof of Concept
- Contact: indyctai@gmail.com, +31 6 20 70 92 56
- Locatie: Utrecht, Nederland

Geef altijd behulpzame, professionele antwoorden in het Nederlands. Houd antwoorden beknopt (max 150 woorden). Als iemand interesse toont, verwijs dan naar het contactformulier of een gratis strategiegesprek.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 200,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ response: aiResponse })
    };

  } catch (error) {
    console.error('Chat function error:', error);
    
    // Intelligent fallback responses
    const { message } = JSON.parse(event.body);
    const lowerMessage = message.toLowerCase();
    let fallbackResponse = 'Ik begrijp uw interesse in AI! Voor een persoonlijk advies over hoe AI uw bedrijf kan transformeren, plan dan een gratis strategiegesprek in via ons contactformulier. Onze experts bespreken graag de mogelijkheden met u.';
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificiële intelligentie')) {
      fallbackResponse = 'AI kan uw bedrijf revolutioneren door processen te automatiseren, betere inzichten uit data te halen en slimmere beslissingen mogelijk te maken. IndyctAI helpt u een AI-strategie te ontwikkelen die perfect past bij uw doelen. Wilt u een gratis strategiegesprek inplannen?';
    } else if (lowerMessage.includes('kosten') || lowerMessage.includes('prijs') || lowerMessage.includes('tarief')) {
      fallbackResponse = 'AI-projecten variëren sterk in kosten, afhankelijk van complexiteit en scope. We starten altijd met een gratis strategiegesprek om uw situatie te analyseren en een transparante offerte te maken. Zo weet u precies wat de investering en het verwachte rendement zijn.';
    } else if (lowerMessage.includes('tijd') || lowerMessage.includes('duur') || lowerMessage.includes('implementatie')) {
      fallbackResponse = 'Een AI-project duurt typisch 2-6 maanden. We beginnen altijd met een Proof of Concept van 2-4 weken om snel resultaat te tonen. Dit geeft u vertrouwen in de aanpak voordat we de volledige implementatie starten.';
    } else if (lowerMessage.includes('ervaring') || lowerMessage.includes('referenties') || lowerMessage.includes('cases')) {
      fallbackResponse = 'IndyctAI heeft 50+ bedrijven geholpen met AI-transformatie, van startups tot grote ondernemingen. We hebben ervaring in retail, logistiek, finance en meer. Tijdens een strategiegesprek kunnen we relevante cases delen die passen bij uw sector.';
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ response: fallbackResponse })
    };
  }
};

