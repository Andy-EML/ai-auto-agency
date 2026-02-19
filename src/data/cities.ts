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
      'London has more professional services firms per square mile than anywhere else in the UK. Legal practices in the City. Consultants in Mayfair. Trades businesses across all 33 boroughs. The cost of hiring in London makes the economics of automation cleaner — and the volume of inbound enquiries makes the case for not missing a single one.',
    metaDescription:
      'We work with businesses in London — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'A lot of London businesses are running lean. Solopreneurs. Small professional firms. Trades companies where the person doing the work is also answering the phone — except when they can\'t. That\'s where calls get missed and clients go elsewhere. We build the systems that stop that happening.',
    whyChooseUs: [
      {
        title: 'Professional Services Know-How',
        description:
          'A significant part of our London client base is legal firms, consultants and financial services. We understand the confidentiality concerns and the enquiry flow. We build around how these businesses actually work.',
      },
      {
        title: 'Trades Businesses Across All Boroughs',
        description:
          'Plumber in Hackney. Electrician covering Wandsworth to Croydon. The geography of London means more missed calls, more competition for each job. A voice agent that answers every time changes that calculation.',
      },
      {
        title: 'ROI Is Clearer Here',
        description:
          'London rates for professional services mean the value of each captured enquiry is higher. The business case for not missing calls tends to be more straightforward than anywhere else in the UK.',
      },
    ],
    testimonial: {
      quote:
        "I was losing calls constantly — running between client meetings and site visits, the phone was ringing when I couldn't get to it. Now the AI picks everything up. I've picked up three new clients in the first month who said they'd have called someone else.",
      author: 'Marcus T.',
      business: 'Consultant, East London',
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
      'Birmingham has a strong trades and manufacturing base alongside growing professional services. Independent service businesses here tend to run tight — doing the work themselves, covering wide areas across the West Midlands. The common problem: the phone rings when you\'re on site and you can\'t answer it.',
    metaDescription:
      'We work with businesses in Birmingham — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'Service businesses in Birmingham cover a lot of ground. Erdington to Edgbaston. Sutton Coldfield to Northfield. One person or a small team, working across the city, trying to stay on top of calls and enquiries at the same time as doing the actual work. We build the systems that handle the enquiry side so you can focus on the delivery side.',
    whyChooseUs: [
      {
        title: 'Built for Trades Businesses',
        description:
          'A significant part of our Birmingham client work is with tradespeople — plumbers, electricians, HVAC engineers. People who can\'t be on the phone when they\'re on a job. The voice agent handles that.',
      },
      {
        title: 'Growing Professional Services Scene',
        description:
          'Birmingham\'s professional services sector is growing. Solicitors, consultants, financial advisers running lean operations. We build automation that fits how small firms actually work — not enterprise systems scaled down.',
      },
      {
        title: 'No Hidden Complexity',
        description:
          'We build it, connect it to your existing number, test it properly, and hand it over. You don\'t need to manage it or understand how it works. You just get the results.',
      },
    ],
    testimonial: {
      quote:
        'Covering Erdington to Edgbaston meant constant phone interruptions. Now the AI handles enquiries and books the initial appointments. I get a text with everything I need to know. Proper time saver.',
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
      'Manchester has a strong tech and professional services scene alongside a large trades sector. Consultancies, agencies, sole practitioners running lean operations. A growing city that attracts ambitious businesses — and ambitious businesses tend to have more enquiries than they can comfortably handle manually.',
    metaDescription:
      'We work with businesses in Manchester — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'Greater Manchester businesses cover a lot of ground — Salford to Stockport, Bolton to Tameside. If you\'re busy, calls get missed. If calls get missed, jobs go elsewhere. We build voice agents and chatbots that handle first contact so you\'re not losing work to whoever picks up the phone faster.',
    whyChooseUs: [
      {
        title: 'Consultancies and Agencies',
        description:
          'Manchester has a dense professional services and agency scene. Independent consultants, small creative agencies, specialist advisers — all facing the same problem of handling enquiries while actually doing the work. We build the automation that handles the enquiry side.',
      },
      {
        title: 'Large Trades Sector',
        description:
          'Greater Manchester\'s construction and trades sector is significant. Heating engineers, electricians, builders covering multiple boroughs. The voice agent answers every call, captures every job, sends you the details.',
      },
      {
        title: 'Fast-Growing Market',
        description:
          'Manchester is growing. More businesses, more competition, more pressure to respond quickly. The businesses that respond first tend to win the work. We make sure you\'re always responding first.',
      },
    ],
    testimonial: {
      quote:
        'We serve all of Greater Manchester but were only able to handle calls from one place at a time. The AI picks up everything now, sorts the urgent from the routine, and I just deal with what needs a human. Brilliant.',
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
      'Leeds is one of the UK\'s largest legal centres outside London. A significant number of law firms, solicitors and legal consultants operate here — alongside financial services, growing creative and tech businesses, and a strong trades sector across West Yorkshire. The enquiry problem is common across all of them.',
    metaDescription:
      'We work with businesses in Leeds — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'Law firms in Leeds deal with a lot of admin that doesn\'t need a qualified solicitor. Trades businesses covering Headingley to Rothwell miss calls when they\'re on site. Consultants lose enquiries to slow response times. We build the systems that handle first contact so you can focus on the work that actually needs you.',
    whyChooseUs: [
      {
        title: 'Major Legal Hub',
        description:
          'Leeds has one of the largest legal sectors in the UK outside London. Small firms and sole practitioners often have the same enquiry handling problems as any other service business — calls missed, intake done manually, follow-up left too long. We build automation that fits around how legal firms work.',
      },
      {
        title: 'Financial and Professional Services',
        description:
          'A significant financial services presence in Leeds means small advisory firms, accountants and consultants running lean operations. Enquiry capture and follow-up automation makes a measurable difference here.',
      },
      {
        title: 'Strong Trades Sector',
        description:
          'West Yorkshire\'s trades businesses face the same timing problem as everywhere — can\'t answer when you\'re working. A voice agent that catches every call changes the maths on how much work you win.',
      },
    ],
    testimonial: {
      quote:
        "I'm out across Leeds all day — Roundhay one minute, Pudsey the next. Missing calls was costing me jobs I didn't even know about. The AI handles it and texts me what I need. No more lost work.",
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
      'Liverpool service businesses tend to operate across a wide area of Merseyside. Trades, property services, professional firms — many running lean, many covering more ground than they can comfortably handle on the phone. The enquiry problem is the same here as anywhere: you can\'t answer when you\'re working.',
    metaDescription:
      'We work with businesses in Liverpool — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'From Anfield to Allerton, Crosby to Childwall — if you\'re covering Merseyside and doing the work yourself, calls get missed. We build voice agents and chatbots that handle first contact while you\'re focused on delivery. Every enquiry captured, every caller given a professional response, every job opportunity preserved.',
    whyChooseUs: [
      {
        title: 'Trades and Property Services',
        description:
          'Liverpool has a strong trades sector. Plumbers, electricians, builders, property maintenance companies. All facing the same challenge: the phone rings when you\'re on a job and you can\'t answer it. The voice agent handles that.',
      },
      {
        title: 'Professional Response, Always',
        description:
          'A caller who gets through to a professional, helpful voice agent has a better experience than a caller who hits voicemail. The agent answers immediately, handles the enquiry, and makes a good first impression every time.',
      },
      {
        title: 'No Missed Opportunities',
        description:
          'Out-of-hours calls, weekend enquiries, calls during site visits — everything gets answered. You see a notification with the details. Nothing falls through the gaps.',
      },
    ],
    testimonial: {
      quote:
        'The phone was constant and I was missing half of it. The AI handles first contact now, books what it can, and flags the rest for me. Much less to chase at the end of the day.',
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
      'Glasgow has a strong construction and trades sector alongside growing professional services. Service businesses here tend to be practical — they want things that work, not things that sound good in a pitch. The automation we\'ve built for Glasgow clients is straightforward: answer the calls, book the jobs, send the details.',
    metaDescription:
      'We work with businesses in Glasgow — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'Trades businesses covering the West End to the Southside. Professional firms in Merchant City. Any service business in Glasgow with more enquiries than time to handle them properly. We build voice agents and chatbots that handle first contact while you\'re working — so no call goes unanswered and no job goes to someone who picked up faster.',
    whyChooseUs: [
      {
        title: 'Construction and Trades',
        description:
          'Glasgow\'s construction sector is significant. Painters, roofers, joiners, plumbers, heating engineers — all dealing with the same problem. The voice agent answers every call, captures the job details, and books it into your calendar.',
      },
      {
        title: 'Practical, No Fuss',
        description:
          'We\'ve found Glasgow clients want something that works and doesn\'t require explaining to customers. The agent is professional and clear. It does the job without overcomplicating it.',
      },
      {
        title: 'Growing Professional Services',
        description:
          'Glasgow\'s professional services scene is growing. Consultants, lawyers and advisers running lean operations benefit from the same automation — enquiry capture, intake, follow-up handled without manual effort.',
      },
    ],
    testimonial: {
      quote:
        "Working across Glasgow meant missing half my calls. The AI handles enquiries from the West End to the Southside, books everything in, and lets me focus on the actual work. Does exactly what it says.",
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
      'Construction, property, and public sector work has long been the backbone of the Northeast economy. Northern Powerhouse investment is bringing more professional services north. Newcastle businesses are pragmatic — they want things that work without a lot of overhead. That\'s what we build.',
    metaDescription:
      'We work with businesses in Newcastle — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'From Jesmond to Gateshead, North Shields to South Shields — if you\'re covering Tyne and Wear and can\'t always be on the phone, calls get missed. Construction firms, property businesses, trades companies and growing professional services firms across the Northeast face the same problem. We build the systems that handle first contact so you don\'t lose work to whoever picked up first.',
    whyChooseUs: [
      {
        title: 'Construction and Property',
        description:
          'Newcastle\'s construction and property sector is one of the largest in the Northeast. Firms covering wide areas of Tyne and Wear can\'t always answer every call. The voice agent handles that — every call answered, every enquiry captured.',
      },
      {
        title: 'Professional Services Growth',
        description:
          'Northern Powerhouse investment is bringing more professional services businesses north. Consultants, advisers and small firms benefit from the same automation we build for trades — enquiry capture, intake, follow-up.',
      },
      {
        title: 'Straightforward Setup',
        description:
          'We connect it to your existing phone number. Nothing changes for callers. We test it thoroughly before going live. You don\'t manage it — we do.',
      },
    ],
    testimonial: {
      quote:
        "Serving Jesmond to Gateshead meant the phone was ringing when I couldn't get to it. The AI handles bookings and answers the standard questions. I get a text with the details. Proper job.",
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
      'Hampshire is spread out. Portsmouth contracts. Southampton call-outs. Winchester clients. Rural work across the county. One business, one phone, too many places to be at once — and a phone that rings when you\'re driving between them. That\'s a problem we understand well, because we\'re based here.',
    metaDescription:
      'We work with businesses in Hampshire — voice agents, chatbots and workflow automation. UK-wide agency. Book a call.',
    heroDescription:
      'Hampshire service businesses cover massive distances. From the coast to the countryside, from Southampton to Andover. If you\'re doing the work yourself and covering that kind of ground, calls will get missed. We build voice agents and chatbots that handle first contact while you\'re in transit or on site — so every enquiry gets a professional response.',
    whyChooseUs: [
      {
        title: 'We\'re Hampshire-Based',
        description:
          'Antek Automation is based in Andover. We know the county, the spread of the work, and the challenges of covering it. That context matters when we\'re building systems for local businesses.',
      },
      {
        title: 'Coast to Countryside Coverage',
        description:
          'The geography of Hampshire means more missed calls than a compact city operation. Southampton to Aldershot is a long way. A voice agent that answers every call regardless of where you are changes that.',
      },
      {
        title: 'Mixed Sector Experience',
        description:
          'Hampshire has a diverse economy — naval and defence, professional services, trades, rural businesses. We\'ve built automation across the range. The solution is tailored to how your specific business works.',
      },
    ],
    testimonial: {
      quote:
        'Covering Southampton to Winchester meant missing calls while I was driving. The AI handles it all now — books appointments, answers service area questions, and I just get notifications. Works exactly as described.',
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
