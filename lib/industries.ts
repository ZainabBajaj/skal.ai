export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryUseCase {
  title: string;
  body: string;
  productHref: '/scale' | '/systems' | '/services' | '/staffing';
  productLabel: string;
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    body: string;
  };
  bottleneck: {
    title: string;
    body: string;
  };
  useCases: IndustryUseCase[];
  stats: { label: string; value: string }[];
  integrations: string[];
  faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
  {
    slug: 'dental-clinics',
    name: 'Dental Clinics',
    shortName: 'dental',
    hero: {
      eyebrow: 'AI FOR DENTAL CLINICS',
      headline: 'Never miss a patient call again.',
      subhead: 'An AI receptionist trained on your clinic, your hours, and your insurance rules.',
      body: 'Dental practices lose 30 to 40 percent of new-patient calls to voicemail, hold queues, and after-hours gaps. SKAL deploys an AI receptionist that answers every inbound call, books appointments straight to your calendar, verifies insurance basics, and routes urgent calls to the on-call dentist. Live in your clinic in under two weeks.',
    },
    bottleneck: {
      title: 'The front desk is the bottleneck.',
      body: 'Most dental practices run on one or two front-desk staff handling check-ins, billing, insurance verification, and inbound calls at the same time. New-patient calls go to voicemail. Existing patients wait on hold. Hygiene reminders fall behind. Every missed call is a lost recurring patient relationship worth thousands of dollars over time. Hiring more staff is expensive and seasonal volume is unpredictable. AI receptionists fill the gap without replacing anyone, freeing your team to focus on patients who are physically in the chair.',
    },
    useCases: [
      {
        title: '24/7 AI receptionist',
        body: 'Answers every call instantly in your brand voice. Books, reschedules, and cancels appointments. Handles common questions about hours, insurance, location, and procedures. Multilingual out of the box. Routes urgent calls (broken crown, severe pain) to the on-call dentist with full context.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Receptionist',
      },
      {
        title: 'Appointment reminder and recall',
        body: 'Automated SMS and voice reminders for upcoming appointments. Recall campaigns for patients overdue for hygiene visits. Two-way confirmation so patients can reschedule by reply. Cuts no-show rate and fills empty chairs with patients you already have.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Workflows',
      },
      {
        title: 'New-patient intake automation',
        body: 'Web chat that qualifies new patients, collects insurance details, sends digital intake forms, and books a first visit. The intake is in your practice management system before the patient walks in.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Chat',
      },
      {
        title: 'Custom builds for multi-location DSOs',
        body: 'Dental service organisations with multiple practices need centralised intake, call routing across locations, and unified reporting. SKAL Services builds the infrastructure on top of your existing PMS so the network behaves like one practice from the patient side.',
        productHref: '/services',
        productLabel: 'SKAL Services',
      },
    ],
    stats: [
      { label: 'of new-patient calls go to voicemail', value: '30%+' },
      { label: 'cost of a single missed new patient over the relationship', value: '$5,000+' },
      { label: 'time to live in your clinic', value: '~1 week' },
      { label: 'languages supported out of the box', value: '30+' },
    ],
    integrations: ['Dentrix', 'Eaglesoft', 'Open Dental', 'Curve Dental', 'Google Calendar', 'Microsoft 365', 'Twilio', 'RingCentral'],
    faqs: [
      {
        q: 'Will the AI receptionist work with our practice management system?',
        a: 'Yes. SKAL integrates with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most modern PMS platforms. Appointments are written directly to your calendar and patient records, not a separate database we hold hostage.',
      },
      {
        q: 'How does it handle insurance questions?',
        a: 'The system is trained on the insurance networks you accept and your specific policies for verification and pre-authorisation. For complex eligibility questions, it collects the basics and routes to your billing coordinator with a structured summary.',
      },
      {
        q: 'What about HIPAA and patient privacy?',
        a: 'Calls and chats run on HIPAA-compliant infrastructure. We do not retain protected health information beyond what your PMS already stores. Full BAA available.',
      },
      {
        q: 'How does it know if a call is a real emergency?',
        a: 'The intake is trained on common dental urgencies (avulsion, severe pain, swelling, post-op complications). Urgent calls get a hot transfer to your on-call dentist with the patient name, history, and what they said, so the dentist is not starting from zero.',
      },
      {
        q: 'What does pricing look like?',
        a: 'Flat monthly fee per clinic, not per call. Quoted after a 30-minute discovery call once we understand call volume and which workflows you want automated.',
      },
    ],
  },
  {
    slug: 'law-firms',
    name: 'Law Firms',
    shortName: 'legal',
    hero: {
      eyebrow: 'AI FOR LAW FIRMS',
      headline: 'Capture every lead. Bill every minute.',
      subhead: 'AI intake, conflict checking, and 24/7 client communication, built around your matters.',
      body: 'In legal, the first firm to call back wins the case. Most firms lose qualified leads to voicemail, slow callbacks, and after-hours gaps. SKAL deploys AI intake systems that qualify prospective clients, run conflict checks, schedule consultations, and route urgent matters, all in your firm voice, all integrated with your case management software.',
    },
    bottleneck: {
      title: 'Intake is where law firms lose money.',
      body: 'A solo or small firm partner doing intake personally is billing zero dollars for it. Delegating to a paralegal still misses after-hours and weekend calls when most personal-injury and family-law leads convert. The legal industry standard for lead response is under five minutes and most firms miss it. AI intake closes that gap without adding headcount, while feeding qualified, conflict-checked, scheduled prospects straight into your case management system.',
    },
    useCases: [
      {
        title: 'AI intake and qualification',
        body: 'Inbound voice and chat that asks the matter-specific qualification questions (PI: date of accident, injuries, treatment status; family: jurisdiction, opposing counsel; criminal: charge, court date). Built-in conflict checks against your case database. Books the consultation only for qualified, conflict-free prospects.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Receptionist',
      },
      {
        title: 'After-hours and overflow coverage',
        body: 'When your front desk is on the other line or it is 9 PM on a Friday, the AI picks up in your firm voice. No prospect hears a voicemail. Every intake is logged, transcribed, and sent to the attorney on call.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Receptionist',
      },
      {
        title: 'Client communication automation',
        body: 'Status updates on case milestones, document request reminders, payment reminders, and discovery deadlines all run on automated workflows. Reduces the daily admin burden on attorneys and paralegals.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Workflows',
      },
      {
        title: 'Custom matter-management tooling',
        body: 'Firms with a specific practice area (mass tort, immigration, M&A) often need custom intake flows, document generators, or case-tracking dashboards beyond what off-the-shelf software provides. SKAL Services builds these around your existing stack.',
        productHref: '/services',
        productLabel: 'SKAL Services',
      },
    ],
    stats: [
      { label: 'industry standard lead-response time', value: '<5 min' },
      { label: 'of inbound leads convert if response is under 5 minutes', value: '~21%' },
      { label: 'of small firms miss that window', value: '~80%' },
      { label: 'time to deploy', value: '~1 week' },
    ],
    integrations: ['Clio', 'MyCase', 'PracticePanther', 'Smokeball', 'Filevine', 'Litify', 'Google Workspace', 'Microsoft 365'],
    faqs: [
      {
        q: 'Will the AI replace our intake team?',
        a: 'It augments them. Your intake coordinators stay in control of qualified, complex matters. The AI catches everything else, especially after-hours, overflow, and the first sixty seconds of every call. Your team works at the top of their license, not on phone tag.',
      },
      {
        q: 'How does it handle conflict checks?',
        a: 'The intake system queries your case management system in real time. If a name matches an existing client or opposing party, the consultation is not booked and the matter is routed to a managing attorney for review.',
      },
      {
        q: 'Can it handle multiple practice areas?',
        a: 'Yes. Each practice area gets its own qualification logic. The system identifies the type of matter from the first part of the conversation and runs the right intake script.',
      },
      {
        q: 'What about confidentiality and attorney-client privilege?',
        a: 'Inbound intake before an engagement is consultative, not privileged in most jurisdictions, but we treat it that way. Calls are encrypted, transcripts are stored in your case management system only, and we sign NDAs by default.',
      },
      {
        q: 'How is it different from a virtual receptionist service?',
        a: 'Virtual receptionists answer the phone. They do not qualify by practice area, run conflict checks, schedule consultations directly to attorney calendars, or push structured intake data into Clio. The AI does all of that, faster, and at a flat monthly fee instead of per-minute pricing.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    shortName: 'real estate',
    hero: {
      eyebrow: 'AI FOR REAL ESTATE',
      headline: 'Respond to every lead in under a minute.',
      subhead: 'AI agents that qualify buyers and sellers, book showings, and follow up automatically.',
      body: 'In real estate, lead response time is the entire game. A five-minute reply is six times more likely to convert than a one-hour reply. SKAL deploys AI systems that respond to every Zillow, Realtor.com, website, and Facebook lead instantly, qualify them, and book showings or listing appointments straight into your calendar.',
    },
    bottleneck: {
      title: 'Speed-to-lead decides the deal.',
      body: 'Real estate agents juggle showings, closings, and 200 active leads. New inquiries from portals, websites, and social ads sit in inboxes for hours before anyone responds. By then the lead has talked to three other agents. Hiring an ISA team is expensive and inconsistent. AI agents pick up every inquiry in seconds, ask the qualification questions, and only put a human in front of the lead when it is worth the agent\'s time.',
    },
    useCases: [
      {
        title: 'Instant lead qualification',
        body: 'Every Zillow, Realtor.com, website form, and Facebook ad lead gets an instant SMS, chat, or voice response. The AI confirms intent, budget, timeline, financing pre-approval status, and motivation. Disqualified leads are nurtured automatically. Qualified leads get a showing or listing appointment booked.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Sales',
      },
      {
        title: 'Showing booking and confirmation',
        body: 'The AI checks the listing agent\'s availability, the buyer\'s schedule, and lockbox or appointment-service rules, then books the showing and sends confirmations to both sides. Reschedules and cancellations are handled automatically.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Receptionist',
      },
      {
        title: 'Listing appointment generation',
        body: 'For brokerages running seller-side outreach, SKAL Scale runs automated outbound to identified FSBOs, expireds, and absentee owners. Personalised sequences across email, voice, and SMS. You only pay when a listing appointment lands on a calendar.',
        productHref: '/scale',
        productLabel: 'SKAL Scale',
      },
      {
        title: 'CRM cleanup and pipeline automation',
        body: 'Most agents have thousands of stale leads in Follow Up Boss, kvCORE, or Sierra. SKAL Services builds automation that re-engages cold leads at scale, scores them by buying intent, and pushes warm ones back into active follow-up.',
        productHref: '/services',
        productLabel: 'SKAL Services',
      },
    ],
    stats: [
      { label: 'increase in conversion when lead is responded to in under 5 minutes', value: '6x' },
      { label: 'of online leads are never followed up on', value: '~40%' },
      { label: 'time to live with leads flowing', value: '~1 week' },
      { label: 'AI is always available', value: '24/7' },
    ],
    integrations: ['Follow Up Boss', 'kvCORE', 'Sierra Interactive', 'BoomTown', 'Lofty', 'CINC', 'Zillow', 'Realtor.com', 'ShowingTime'],
    faqs: [
      {
        q: 'Will the AI sound like a robot to my leads?',
        a: 'No. Voice is powered by ElevenLabs with natural inflection and pacing, trained on your team voice. Most leads do not realise they are speaking with an AI until told, and even then they generally do not mind because the response is fast and helpful.',
      },
      {
        q: 'Will it work with my CRM and lead sources?',
        a: 'Yes. SKAL integrates with Follow Up Boss, kvCORE, Sierra, BoomTown, Lofty, and most major real estate CRMs. Lead source attribution is preserved end to end.',
      },
      {
        q: 'How does it handle showings outside business hours?',
        a: 'It books showings into the time windows you have pre-approved, including evenings and weekends. Lockbox codes or showing-service appointments are coordinated automatically. You only get an alert if something needs human judgment.',
      },
      {
        q: 'What about compliance, DNC, and TCPA?',
        a: 'The system respects DNC lists, TCPA opt-out language, and state-specific real estate disclosure rules. We build the disclosure into the first interaction so you are protected.',
      },
      {
        q: 'Can a team or brokerage roll this out for all agents?',
        a: 'Yes. Brokerages typically deploy a shared AI layer with per-agent routing, lead distribution rules, and reporting dashboards. We have built this for teams of 5 and brokerages of 500.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & DTC',
    shortName: 'e-commerce',
    hero: {
      eyebrow: 'AI FOR E-COMMERCE',
      headline: 'Cut support cost. Keep CSAT.',
      subhead: 'AI support that resolves WISMO, returns, and product questions without escalating.',
      body: 'Direct-to-consumer brands hit a wall when order volume grows faster than the support team. Tickets pile up, response times slip, CSAT falls, and the cost of acquiring a repeat customer goes up. SKAL deploys AI support systems trained on your products, policies, and shipping rules that resolve the bulk of inbound tickets without escalating.',
    },
    bottleneck: {
      title: 'Support scales linearly. Order volume does not.',
      body: 'A DTC brand that ships 1,000 orders a month and grows to 10,000 cannot just hire 10x more support agents without destroying margins. The same 5 question types (where is my order, can I return this, does this fit, is this in stock, can I change my address) account for 70 to 85 percent of inbound volume. Those are exactly the questions an AI system, integrated with Shopify and your 3PL, resolves in seconds.',
    },
    useCases: [
      {
        title: 'AI support across email, chat, and DM',
        body: 'Resolves WISMO (where is my order) by querying your Shopify and tracking provider in real time. Handles returns, exchanges, address changes, and product-fit questions trained on your sizing and product data. Escalates only edge cases to your human team, with full context attached.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Support',
      },
      {
        title: 'Pre-purchase conversion chat',
        body: 'On-site chat that answers product questions, recommends size or fit, and surfaces in-stock alternatives when the item the customer wants is unavailable. Recovers checkout-abandon traffic that would otherwise bounce.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Chat',
      },
      {
        title: 'Post-purchase retention workflows',
        body: 'Automated review requests timed to delivery, replenishment reminders for consumables, win-back sequences for lapsed customers, and personalised cross-sell. All on autopilot, all integrated with your ESP and Shopify customer data.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Workflows',
      },
      {
        title: 'Custom merchandising and ops tooling',
        body: 'Mature DTC brands often need internal tools for catalog management, inventory forecasting, or marketplace operations across Amazon, Faire, and wholesale. SKAL Services builds these around your existing Shopify and ERP stack.',
        productHref: '/services',
        productLabel: 'SKAL Services',
      },
    ],
    stats: [
      { label: 'of DTC support tickets are 5 question types or fewer', value: '70-85%' },
      { label: 'reduction in tier-1 ticket cost typical for AI support deployments', value: '40-60%' },
      { label: 'time to deploy with Shopify and Gorgias', value: '~1 week' },
      { label: 'support coverage', value: '24/7' },
    ],
    integrations: ['Shopify', 'Shopify Plus', 'Gorgias', 'Zendesk', 'Intercom', 'Klaviyo', 'Postscript', 'Recharge', 'ShipBob', 'ShipStation'],
    faqs: [
      {
        q: 'Will the AI sound on-brand?',
        a: 'Yes. Voice and tone are configured to match your brand voice. We feed it your existing help-center articles, past ticket macros, and brand guidelines so the responses sound like your team, not a generic chatbot.',
      },
      {
        q: 'What happens when the AI cannot resolve a ticket?',
        a: 'It escalates to a human with the full conversation, the customer\'s order history, and a suggested next action. Your team picks up where the AI left off rather than starting from zero.',
      },
      {
        q: 'How does it integrate with Shopify and Gorgias?',
        a: 'Live, two-way. The AI reads order, customer, and fulfillment data in real time and writes notes, tags, and ticket statuses back to Gorgias or Zendesk. Your team sees the full activity in their normal tool.',
      },
      {
        q: 'What about refund authority and policy enforcement?',
        a: 'You set the rules: who gets a no-questions-asked refund, what the return window is, how to handle damaged-in-transit cases. The AI follows your policy strictly. Anything outside the rules goes to a human with a recommended decision.',
      },
      {
        q: 'How is this different from Shopify Inbox or Gorgias auto-responder?',
        a: 'Native tools answer with templates. SKAL\'s system actually resolves the ticket end to end: pulls the tracking, issues the return label, updates the address, and confirms in one interaction. That is what reduces ticket volume rather than just delaying it.',
      },
    ],
  },
  {
    slug: 'saas',
    name: 'B2B SaaS',
    shortName: 'SaaS',
    hero: {
      eyebrow: 'AI FOR B2B SAAS',
      headline: 'Pipeline, support, and onboarding on one execution layer.',
      subhead: 'AI systems that book demos, qualify leads, resolve support, and onboard users automatically.',
      body: 'B2B SaaS companies run lean. Founders and PMs end up doing demo qualification, tier-1 support, and onboarding because hiring SDRs and CSMs is expensive and slow. SKAL replaces that operational labor with AI systems that book demos, qualify leads, resolve support tickets, and walk users through onboarding, all integrated with your existing stack.',
    },
    bottleneck: {
      title: 'You hired engineers. They are doing support and SDR work.',
      body: 'In most early and mid-stage SaaS companies, founders and engineers absorb the operational load: demo qualification, customer onboarding, support tickets, churn outreach. It is the only way to ship without burning runway on a big GTM team. AI systems do the bulk of that work autonomously, integrated with HubSpot, Intercom, and your product itself, so your team can focus on building.',
    },
    useCases: [
      {
        title: 'Automated outbound to your ICP',
        body: 'SKAL Scale runs AI prospecting against your defined ideal-customer profile, personalised sequences across email and LinkedIn, and a proprietary contact database. You only pay when a qualified demo lands on your calendar. No SDR team required.',
        productHref: '/scale',
        productLabel: 'SKAL Scale',
      },
      {
        title: 'Inbound demo qualification',
        body: 'AI chat and voice on your pricing and contact pages that qualifies inbound leads in real time. Routes high-fit, high-intent leads to founder calendar directly. Disqualified ones go into a nurture sequence instead of wasting a sales call.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Sales',
      },
      {
        title: 'Tier-1 support and onboarding',
        body: 'AI support trained on your product docs, changelog, and past ticket data. Resolves account questions, billing, password resets, integration setup, and common how-tos. Walks new users through onboarding via in-app chat. Escalates only product bugs and edge cases.',
        productHref: '/systems',
        productLabel: 'SKAL Systems · Support',
      },
      {
        title: 'Embedded AI engineering talent',
        body: 'When you need to ship real product work, SKAL Staffing embeds pre-vetted AI-native engineers into your team. Full-stack, AI/ML, and DevOps operators billed by the hour, shipping production work from week one.',
        productHref: '/staffing',
        productLabel: 'SKAL Staffing',
      },
    ],
    stats: [
      { label: 'pay-per-qualified-meeting on Scale', value: 'no retainer' },
      { label: 'tier-1 ticket deflection typical after Systems deploys', value: '60-75%' },
      { label: 'Systems live in', value: '~1 week' },
      { label: 'Staffing engineers ship in', value: 'week 1' },
    ],
    integrations: ['HubSpot', 'Salesforce', 'Intercom', 'Pylon', 'Plain', 'Zendesk', 'Linear', 'Slack', 'Segment', 'PostHog', 'Stripe', 'Clay'],
    faqs: [
      {
        q: 'Will SKAL Scale work in our niche if our ICP is narrow?',
        a: 'Yes, especially. Narrow ICPs are easier to identify and personalise to than broad ones. Our proprietary contact database is built in-house and continuously updated, so we are not limited to whatever Apollo or ZoomInfo has indexed.',
      },
      {
        q: 'How does the AI support system stay current as our product changes?',
        a: 'Knowledge sources (docs, changelog, help center) are connected live. When you ship a feature and update the docs, the system knows about it within minutes. You can also push corrections inline from any conversation.',
      },
      {
        q: 'Can we keep our existing tooling?',
        a: 'Yes. We work inside HubSpot, Intercom, Linear, Slack, and the rest of your stack rather than replacing them. The AI is a layer on top, not a swap-out.',
      },
      {
        q: 'How is this different from hiring an SDR or an offshore support team?',
        a: 'Cost, speed, and consistency. An SDR ramps in 3 months, costs $80k+, and quits at 18. The AI is live in a week, costs a fraction, and never has a bad day. The honest comparison is not "AI vs human" but "AI now plus humans for what matters" vs "humans only, slow and expensive."',
      },
      {
        q: 'What about data privacy and SOC 2?',
        a: 'Infrastructure runs on SOC 2 compliant providers. We sign DPAs and BAAs as required. Customer data is not used to train shared models.',
      },
    ],
  },
];

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

export function getIndustryBySlug(slug: string): Industry | null {
  return industries.find((i) => i.slug === slug) ?? null;
}
