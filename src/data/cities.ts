export interface CityData {
  name: string;
  slug: string;
  region: string;
  coverageAreas: string[];
  localContext: string;
  metaDescription: string;
  heroDescription: string;
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    business: string;
  };
}

export const cities: Record<string, CityData> = {
  london: {
    name: 'London',
    slug: 'london',
    region: 'Greater London',
    coverageAreas: [
      'Westminster',
      'Camden',
      'Islington',
      'Tower Hamlets',
      'Hackney',
      'Southwark',
      'Lambeth',
      'Wandsworth',
      'Hammersmith & Fulham',
      'Kensington & Chelsea',
      'City of London',
      'All London Boroughs',
    ],
    localContext:
      'London demands speed. With competition fierce across all 33 boroughs, missing a single customer enquiry costs real money. That\'s why leading London service businesses partner with Antek for AI-powered customer handling that never sleeps.',
    metaDescription:
      'AI voice agents & chatbots for London | Answer every call 24/7 | Capture leads & book appointments | Antek Automation UK',
    heroDescription:
      'Every missed call in London is a lost customer in the world\'s most competitive business market. Our AI voice agents work 24/7 across all London boroughs—capturing every enquiry, booking every appointment, handling every question while you focus on delivery. Instantly available. Always professional. Never sleeps.',
    whyChooseUs: [
      {
        title: 'Never Miss a London Enquiry Again',
        description:
          'Whether you\'re onsite in Southwark or servicing Westminster, our AI answers every call instantly. No more voicemail frustration. Every customer gets immediate, professional attention—building trust and capturing business automatically.',
      },
      {
        title: 'Geographic Flexibility Across Greater London',
        description:
          'Serving multiple London boroughs? Our AI understands local geography, handles service area questions naturally, and books appointments across all areas you cover—from Croydon to Barnet, Ealing to Tower Hamlets.',
      },
      {
        title: 'London Quality at Startup Prices',
        description:
          'Get the professional call handling of a major London firm without the expensive central office, reception team, or infrastructure costs. Sound established. Act fast. Keep overhead low.',
      },
    ],
    testimonial: {
      quote:
        "Operating across London, we were missing calls from Hackney to Hounslow. Now our AI handles everything—we've captured an extra £8,000 in monthly revenue just from areas we couldn't cover before.",
      author: 'Marcus T.',
      business: 'Plumbing Services, East London',
    },
  },
  birmingham: {
    name: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    coverageAreas: [
      'City Centre',
      'Edgbaston',
      'Erdington',
      'Sutton Coldfield',
      'Solihull',
      'Northfield',
      'Selly Oak',
      'Kings Heath',
      'Harborne',
      'Moseley',
      'All Birmingham Districts',
    ],
    localContext:
      'Birmingham businesses are ambitious. From the Jewellery Quarter to the industrial suburbs, service companies here compete hard. Missing customer calls costs real contracts. That\'s why smart Birmingham firms use AI to capture every opportunity, every time.',
    metaDescription:
      'AI voice agents & chatbots for Birmingham | Never miss a call again | Serve all West Midlands 24/7 | Antek Automation UK',
    heroDescription:
      'Serving Birmingham\'s Jewellery Quarter? Travelling between Solihull and Edgbaston? Your phone is your lifeline—and you\'re probably missing half the calls. Our AI works across all West Midlands locations, answering instantly, booking jobs automatically. Available around the clock. Zero missed opportunities.',
    whyChooseUs: [
      {
        title: 'Capture Every Birmingham Customer',
        description:
          'From city centre corporate accounts to suburban domestic jobs, from morning emergency calls to evening emergency requests—our AI captures every enquiry across all West Midlands districts, booking everything perfectly.',
      },
      {
        title: 'Stay Ahead in a Competitive Market',
        description:
          'Birmingham customers expect fast responses. When your AI answers in seconds while competitors are still in the field, you win. Instant quotes, instant bookings, instant advantage.',
      },
      {
        title: 'Grow Without Growing Overhead',
        description:
          'Scaling a Birmingham business usually means hiring more staff. Not anymore. Our AI scales with you automatically—handling 10 calls or 100 calls with zero additional cost or complexity.',
      },
    ],
    testimonial: {
      quote:
        'Covering Erdington to Edgbaston meant constant phone interruptions. Now our AI handles initial enquiries, books estimates, and texts me the details. Game changer for a small Birmingham outfit like ours.',
      author: 'Saj P.',
      business: 'Electrical Contractor, Birmingham',
    },
  },
  manchester: {
    name: 'Manchester',
    slug: 'manchester',
    region: 'Greater Manchester',
    coverageAreas: [
      'Manchester City Centre',
      'Salford',
      'Trafford',
      'Stockport',
      'Bolton',
      'Bury',
      'Oldham',
      'Rochdale',
      'Tameside',
      'Wigan',
      'All Greater Manchester',
    ],
    localContext:
      'Manchester moves fast. The North\'s business capital demands reliability and speed—and service businesses here are adopting AI to stay competitive. From city centre to surrounding boroughs, smart companies are capturing every customer interaction.',
    metaDescription:
      'AI voice agents & chatbots for Manchester | Handle calls from Greater Manchester 24/7 | Capture every lead | Antek Automation UK',
    heroDescription:
      'Greater Manchester throws everything at service businesses: Salford contracts, Stockport call-outs, Wigan emergencies. Your phone rings constantly—and you miss half the calls. Our AI handles Greater Manchester\'s pace perfectly. Every call answered. Every opportunity captured. Round the clock.',
    whyChooseUs: [
      {
        title: 'Handle Greater Manchester\'s Demand',
        description:
          'From Bolton\'s early morning calls to Wigan\'s evening emergencies, from Salford\'s corporate contracts to Stockport\'s domestic jobs—our AI answers every call across all 10 boroughs, booking everything in automatically.',
      },
      {
        title: 'Respond Faster Than Your Competitors',
        description:
          'Customers calling a Manchester business expect instant answers. Our AI responds in seconds, books appointments while competitors are still listening to voicemail, and books jobs before they call someone else.',
      },
      {
        title: 'Scale Without Adding Staff',
        description:
          'Growing Manchester businesses hit a ceiling: hire more staff or lose more calls. Skip that headache. Scale your call handling instantly with AI that grows with you—no recruitment, no training, no payroll.',
      },
    ],
    testimonial: {
      quote:
        'We serve all of Greater Manchester but were only answering calls from one area at a time. The AI picks up everything now—even sorts urgent jobs from routine bookings. Brilliant kit.',
      author: 'Lee W.',
      business: 'Heating Engineer, Trafford',
    },
  },
  leeds: {
    name: 'Leeds',
    slug: 'leeds',
    region: 'West Yorkshire',
    coverageAreas: [
      'Leeds City Centre',
      'Headingley',
      'Roundhay',
      'Chapel Allerton',
      'Horsforth',
      'Pudsey',
      'Moortown',
      'Bramley',
      'Rothwell',
      'All Leeds Districts',
    ],
    localContext:
      'Leeds service businesses are growing fast. From Chapel Allerton to Rothwell, smart operators are using AI to handle calls they\'re too busy to answer. That means more revenue without hiring more staff. That\'s Yorkshire business sense.',
    metaDescription:
      'AI voice agents & chatbots for Leeds | Answer calls 24/7 | Serve all West Yorkshire | Antek Automation UK',
    heroDescription:
      'You\'re in Headingley, they\'re calling from Pudsey. You\'re installing in Bramley, the phone\'s ringing in Chapel Allerton. Miss the call, lose the job. Our AI covers all of West Yorkshire 24/7—answering instantly, booking appointments while you work. Never miss again.',
    whyChooseUs: [
      {
        title: 'Cover Every Leeds District at Once',
        description:
          'Managing jobs across all LS postcodes? Our AI answers calls from every area, understands local geography perfectly, and books appointments while you\'re focused on delivery. One system, complete coverage.',
      },
      {
        title: 'Smart Yorkshire Efficiency',
        description:
          'Leeds businesses work hard. Our AI works the same way—efficient, reliable, focused. No wasted words. No missed calls. Just results that matter to your bottom line.',
      },
      {
        title: 'Professional Image, Lean Operation',
        description:
          'Sound big, stay small. Give customers a professional response 24/7 while keeping your operation lean and profitable. That\'s the Leeds way.',
      },
    ],
    testimonial: {
      quote:
        "I'm out in Roundhay one minute, Pudsey the next. Missing calls was costing me jobs. Now the AI books everything in, texts me the details, and I just turn up. Spot on.",
      author: 'David H.',
      business: 'Joiner, Leeds',
    },
  },
  liverpool: {
    name: 'Liverpool',
    slug: 'liverpool',
    region: 'Merseyside',
    coverageAreas: [
      'Liverpool City Centre',
      'Anfield',
      'Allerton',
      'Woolton',
      'Wavertree',
      'Childwall',
      'Crosby',
      'Bootle',
      'Kirkby',
      'All Merseyside',
    ],
    localContext:
      'Liverpool service businesses have heart. From Albert Dock offices to suburban job sites, they genuinely care about service. Our AI adds tireless availability to that—answering every call with the same warmth and professionalism your customers expect.',
    metaDescription:
      'AI voice agents & chatbots for Liverpool | Handle calls across Merseyside 24/7 | Never miss business again | Antek Automation UK',
    heroDescription:
      'Liverpool businesses earn trust through warmth and reliability. Our AI adds "always available" to that equation. Calls from Anfield to Allerton, from morning to midnight—our voice agents answer professionally, book beautifully, and let you focus on delivering the service Liverpool customers love.',
    whyChooseUs: [
      {
        title: 'Warm Professionalism 24/7',
        description:
          'Liverpool customers want genuine, friendly service. Our AI delivers exactly that—warm, helpful, professional responses every call, every time, around the clock.',
      },
      {
        title: 'Coverage Across All Merseyside',
        description:
          'From Liverpool city centre to Crosby, Wavertree to Bootle—our AI covers Merseyside completely. Every area served. Every call answered. No exceptions.',
      },
      {
        title: 'Never Turn Away a Customer',
        description:
          'Liverpool never closes. Our AI doesn\'t either. Weekend calls, evening emergencies, bank holidays—your customers get instant, professional responses while you work or rest.',
      },
    ],
    testimonial: {
      quote:
        'Covering jobs from Anfield to Allerton meant the phone never stopped. The AI handles first contact now, books the diary, and I only get bothered for emergencies. Magic.',
      author: 'Tommy L.',
      business: 'Locksmith, Liverpool',
    },
  },
  glasgow: {
    name: 'Glasgow',
    slug: 'glasgow',
    region: 'Greater Glasgow',
    coverageAreas: [
      'City Centre',
      'West End',
      'Southside',
      'East End',
      'Merchant City',
      'Finnieston',
      'Shawlands',
      'Pollokshields',
      'Dennistoun',
      'All Glasgow Districts',
    ],
    localContext:
      'Glasgow is Scotland\'s business engine. Service companies here move fast, compete hard, and demand AI that keeps up. That\'s why leading Glasgow businesses trust Antek to answer every call, capture every opportunity.',
    metaDescription:
      'AI voice agents & chatbots for Glasgow | Answer calls 24/7 across Scotland | Capture every customer | Antek Automation UK',
    heroDescription:
      'Juggling calls from Merchant City to the West End? Missing customers while you\'re on site? Glasgow businesses deserve AI that matches their pace and professionalism. Our voice agents work 24/7 across Glasgow, answering perfectly, booking automatically. Fast. Professional. Scottish efficient.',
    whyChooseUs: [
      {
        title: 'Answer Every Glasgow Call Instantly',
        description:
          'From Finnieston morning calls to Southside evening enquiries, our AI covers all Glasgow districts 24/7. Every customer gets an instant professional response. Every opportunity captured.',
      },
      {
        title: 'Glasgow Pace, Glasgow Quality',
        description:
          'Glasgow customers expect answers now. Our AI delivers—no lag, no hold music, no missed calls. Professional, quick, and no-nonsense.',
      },
      {
        title: 'Scale Your Business, Not Your Costs',
        description:
          'Growing fast in Glasgow? Our AI scales instantly with zero new hires, zero new overhead. Take more calls, book more jobs, grow more profit.',
      },
    ],
    testimonial: {
      quote:
        "Working across Glasgow meant missing half my calls. The AI's been brilliant—handles enquiries from the West End and Southside, books everything in. Lets me focus on the actual graft.",
      author: 'Stuart M.',
      business: 'Painter & Decorator, Glasgow',
    },
  },
  newcastle: {
    name: 'Newcastle',
    slug: 'newcastle',
    region: 'Tyne and Wear',
    coverageAreas: [
      'Newcastle City Centre',
      'Jesmond',
      'Gosforth',
      'Heaton',
      'Byker',
      'Fenham',
      'Gateshead',
      'North Shields',
      'South Shields',
      'All Tyne and Wear',
    ],
    localContext:
      'Newcastle and Tyne & Wear businesses are modern. But they\'re also pragmatic—which means they like AI that works, not hype. Our system answers calls, books jobs, and helps your business grow. That\'s real Northeast innovation.',
    metaDescription:
      'AI voice agents & chatbots for Newcastle | Handle calls across Northeast 24/7 | Book appointments automatically | Antek Automation UK',
    heroDescription:
      'Covering Jesmond to Gateshead, North Shields to South Shields? Too many calls, not enough hands. Our AI works across all Tyne & Wear, answering every call professionally, booking every appointment perfectly. Canny Newcastle business gets smart AI that actually works.',
    whyChooseUs: [
      {
        title: 'Serve Every Tyne & Wear District',
        description:
          'From Newcastle city centre to Gateshead, North Shields to South Shields—our AI covers the entire Northeast. Every location served. Every call captured. Professional response every time.',
      },
      {
        title: 'Friendly Northeast Service',
        description:
          'Customers expect warmth and competence. Our AI delivers both—genuine, helpful responses that feel personal, but efficient booking that feels professional.',
      },
      {
        title: 'Northeast Rates for Northeast Businesses',
        description:
          'No fancy London pricing. Our AI costs less, works harder, and gives your Northeast business real advantage without breaking the bank.',
      },
    ],
    testimonial: {
      quote:
        "Serving Jesmond to Gateshead meant the phone was ringing constantly. The AI's canny as owt—handles bookings, answers the daft questions, and texts me what I need to know. Proper job.",
      author: 'Craig D.',
      business: 'Roofer, Newcastle',
    },
  },
  hampshire: {
    name: 'Hampshire',
    slug: 'hampshire',
    region: 'Hampshire',
    coverageAreas: [
      'Southampton',
      'Portsmouth',
      'Winchester',
      'Basingstoke',
      'Eastleigh',
      'Fareham',
      'Gosport',
      'Havant',
      'Andover',
      'Farnborough',
      'Aldershot',
      'All Hampshire Districts',
    ],
    localContext:
      'Hampshire is spread out. Portsmouth contracts. Southampton jobs. Winchester clients. Rural emergencies. One business, one phone, too many places. That\'s where AI actually solves a real Hampshire problem.',
    metaDescription:
      'AI voice agents & chatbots for Hampshire | Answer every call 24/7 | Capture leads & book appointments | Antek Automation UK',
    heroDescription:
      'Hampshire service businesses cover massive distances. Southampton to Aldershot. Portsmouth to Winchester. One phone, endless travel. Our AI works everywhere, answering from coast to countryside, booking every appointment while you drive between jobs. Total Hampshire coverage. Zero missed calls.',
    whyChooseUs: [
      {
        title: 'Complete Hampshire County Coverage',
        description:
          'From coastal Portsmouth to rural Andover, from Southampton through to Basingstoke—our AI covers all Hampshire districts simultaneously. Every location. Every call. Every opportunity captured.',
      },
      {
        title: 'Multi-Area Specialist',
        description:
          'Most service businesses in Hampshire serve multiple districts. Our AI understands that reality—manages enquiries from every area, understands local geography perfectly, books efficiently whether calls come from coast or countryside.',
      },
      {
        title: 'Professional Without the Overhead',
        description:
          'Give customers the professional service Hampshire expects without hiring office staff. Our AI gives your small Hampshire business the infrastructure of a major firm.',
      },
    ],
    testimonial: {
      quote:
        'Covering Southampton to Winchester meant missing calls while driving between jobs. The AI handles everything now—books appointments, answers service area questions, and I just get text notifications. Absolute game changer for covering Hampshire.',
      author: 'James R.',
      business: 'Landscaping Services, Hampshire',
    },
  },
};

export const getCityData = (slug: string): CityData | undefined => {
  return cities[slug];
};

export const getAllCities = (): CityData[] => {
  return Object.values(cities);
};
