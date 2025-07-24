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
    
    // Much better diverse fallback responses
    const { message } = JSON.parse(event.body);
    const lowerMessage = message.toLowerCase();
    
    // Arrays of diverse responses for each category
    const generalResponses = [
      'Interessante vraag! AI biedt enorme mogelijkheden voor bedrijven. Laten we eens kijken hoe we uw specifieke uitdaging kunnen aanpakken.',
      'Dat is precies waar IndyctAI u mee kan helpen! We maken AI toegankelijk en praktisch toepasbaar voor uw bedrijf.',
      'Geweldige vraag! AI kan uw bedrijfsprocessen echt transformeren. Wilt u weten hoe we dat voor u kunnen realiseren?',
      'Daar hebben we veel ervaring mee! Laat me u vertellen hoe IndyctAI dit soort uitdagingen aanpakt.',
      'Perfect timing voor deze vraag! AI ontwikkelt zich snel en we helpen bedrijven om hiervan te profiteren.'
    ];

    const aiResponses = [
      'AI revolutioneert bedrijven door slimme automatisering! Van chatbots die 24/7 klanten helpen tot algoritmes die voorspellen wat klanten willen. IndyctAI maakt deze technologie toegankelijk voor uw bedrijf.',
      'Artificiële Intelligentie is als een digitale expert die nooit moe wordt! Het analyseert patronen, automatiseert taken en geeft inzichten die mensen over het hoofd zien.',
      'AI betekent slimmere beslissingen, snellere processen en tevreden klanten! Denk aan automatische klantenservice, voorspellende analyses of slimme aanbevelingen.',
      'Machine Learning kan uw data laten "praten"! Het ontdekt verborgen patronen, voorspelt trends en optimaliseert processen. IndyctAI heeft al 50+ bedrijven geholpen hun data te monetiseren.'
    ];

    const costResponses = [
      'AI-investeringen variëren enorm! Een simpele chatbot start rond €5.000, terwijl complexe machine learning systemen €50.000+ kunnen kosten. We starten altijd met een gratis strategieanalyse.',
      'Slimme vraag over kosten! De meeste AI-projecten betalen zichzelf terug binnen 6-18 maanden door efficiëntiewinst. We maken transparante offertes gebaseerd op verwachte ROI.',
      'Budget is belangrijk bij AI! We werken met verschillende prijsmodellen: van €5.000 voor automatisering tot €25.000+ voor custom ML-oplossingen.',
      'AI-kosten hangen af van complexiteit en scope. Een chatbot kost anders dan predictive analytics! We bieden altijd eerst een gratis strategiegesprek.'
    ];

    const timeResponses = [
      'Snelheid is cruciaal! We starten met een 2-4 weken Proof of Concept om snel resultaat te tonen. Volledige implementatie duurt 2-6 maanden, afhankelijk van complexiteit.',
      'Tijdlijn hangt af van uw ambities! Eenvoudige automatisering kan binnen 4-8 weken live zijn, complexe AI-systemen duren 3-6 maanden.',
      'Geduld loont bij AI! Een gedegen implementatie duurt 2-6 maanden, maar we zorgen voor tastbare resultaten binnen de eerste maand.',
      'Implementatietijd varieert per project! Chatbots zijn snel (4-6 weken), machine learning duurt langer (3-6 maanden).'
    ];

    let fallbackResponse = '';
    
    // Intelligent keyword matching with random diverse responses
    if (lowerMessage.includes('hallo') || lowerMessage.includes('hoi') || lowerMessage.includes('dag') || lowerMessage.includes('hey')) {
      const greetings = [
        'Hallo! Wat fijn dat u IndyctAI bezoekt! Ik ben hier om al uw vragen over AI en onze diensten te beantwoorden.',
        'Hoi daar! Leuk u te ontmoeten! Ik ben de IndyctAI assistent en help graag met vragen over kunstmatige intelligentie.',
        'Goedendag! Welkom bij IndyctAI! Ik sta klaar om u te helpen met alles over AI en automatisering.'
      ];
      fallbackResponse = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificiële intelligentie') || lowerMessage.includes('machine learning')) {
      fallbackResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    } else if (lowerMessage.includes('kosten') || lowerMessage.includes('prijs') || lowerMessage.includes('tarief') || lowerMessage.includes('budget')) {
      fallbackResponse = costResponses[Math.floor(Math.random() * costResponses.length)];
    } else if (lowerMessage.includes('tijd') || lowerMessage.includes('duur') || lowerMessage.includes('implementatie') || lowerMessage.includes('lang')) {
      fallbackResponse = timeResponses[Math.floor(Math.random() * timeResponses.length)];
    } else if (lowerMessage.includes('ervaring') || lowerMessage.includes('referenties') || lowerMessage.includes('cases') || lowerMessage.includes('klanten')) {
      fallbackResponse = 'IndyctAI heeft 50+ bedrijven geholpen met AI-transformatie! Van e-commerce automatisering tot predictive maintenance. We hebben ervaring in retail, logistiek, finance, healthcare en meer.';
    } else if (lowerMessage.includes('chatbot') || lowerMessage.includes('klantenservice')) {
      fallbackResponse = 'Chatbots zijn onze specialiteit! Ze beantwoorden 80% van klantvragen automatisch, werken 24/7 en kwalificeren leads terwijl u slaapt. Wilt u zien hoe dit uw klantenservice kan revolutioneren?';
    } else if (lowerMessage.includes('data') || lowerMessage.includes('analyse') || lowerMessage.includes('inzichten')) {
      fallbackResponse = 'Data is goud waard als je weet hoe je het moet gebruiken! We transformeren uw data in actionable insights met machine learning en predictive analytics.';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('hulp') || lowerMessage.includes('kunnen jullie')) {
      fallbackResponse = 'Natuurlijk help ik u graag! IndyctAI is er om AI toegankelijk te maken voor elk bedrijf. Of het nu gaat om automatisering, data-analyse of slimme chatbots - we hebben de expertise.';
    } else if (lowerMessage.includes('hoe gaat het') || lowerMessage.includes('alles goed')) {
      fallbackResponse = 'Met mij gaat het uitstekend, dank je! Ik ben altijd enthousiast om over AI te praten. En met u? Hoe kan IndyctAI uw dag beter maken?';
    } else {
      // Use random general response to avoid repetition
      fallbackResponse = generalResponses[Math.floor(Math.random() * generalResponses.length)];
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

