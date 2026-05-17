export interface ComparisonRow {
  feature: string;
  skal: string;
  competitor: string;
}

export interface ComparisonFAQ {
  q: string;
  a: string;
}

export interface Comparison {
  slug: string;
  competitor: string;
  category: string;
  hero: {
    headline: string;
    subhead: string;
    body: string;
  };
  whenToPick: {
    skal: string[];
    competitor: string[];
  };
  table: ComparisonRow[];
  honestTake: string;
  faqs: ComparisonFAQ[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'skal-vs-clay',
    competitor: 'Clay',
    category: 'AI sales / outbound automation',
    hero: {
      headline: 'SKAL vs Clay: a different shape of the same problem.',
      subhead: 'Clay is a sales-engineering tool. SKAL Scale is outbound infrastructure as a service.',
      body: 'Clay is the most flexible data enrichment and waterfall tool on the market. If you have a sales engineer who lives in Clay, you can build almost anything. SKAL Scale takes the opposite approach: we run the entire outbound function for you, including the data, sequencing, and pay only when a qualified meeting lands on your calendar. Pick Clay if you want a tool. Pick SKAL if you want pipeline.',
    },
    whenToPick: {
      skal: [
        'You are a founder or revenue leader who wants pipeline, not a data tool to manage.',
        'You do not have a Clay-fluent sales engineer in house.',
        'You want pay-per-qualified-meeting pricing rather than a $349-plus monthly seat plus credits.',
        'You want the contact data sourced and maintained for you, not assembled from waterfall sources you have to configure.',
      ],
      competitor: [
        'You have a sales-ops or sales-engineering team that wants control over every step of the workflow.',
        'You already have your own contact data, ICP definition, and copy and just need orchestration.',
        'You are running campaigns at a scale that makes per-credit pricing materially cheaper than a managed service.',
      ],
    },
    table: [
      { feature: 'Pricing model', skal: 'Pay per qualified meeting + small setup fee', competitor: 'Monthly seat from $149 + credit consumption' },
      { feature: 'Contact data', skal: 'Proprietary in-house database, exclusive to SKAL Scale', competitor: 'Waterfall across third-party providers (you bring your own credits or BYO data)' },
      { feature: 'Setup time', skal: 'Live with pipeline in ~3 days', competitor: 'Days to weeks depending on workflow complexity and team Clay fluency' },
      { feature: 'Skill required', skal: 'None. We run it.', competitor: 'A Clay-fluent operator. Expect to hire or train one.' },
      { feature: 'Copy and sequencing', skal: 'Written and tested by our team, iterated weekly', competitor: 'You write and orchestrate. AI assistants help.' },
      { feature: 'Channels', skal: 'Email, LinkedIn, voice', competitor: 'Email primarily, integrations for the rest' },
      { feature: 'Reporting', skal: 'Meetings booked, attended, closed', competitor: 'Workflow-level analytics, manual revenue attribution' },
      { feature: 'Best for', skal: 'Founders and revenue leaders who want pipeline', competitor: 'Sales-ops teams who want a building-block tool' },
    ],
    honestTake: 'Clay is brilliant software. If you have the operator to drive it, almost nothing competes for flexibility. But most B2B founders we talk to do not want to learn a new tool, hire a Clay specialist, and own the entire outbound engine. They want meetings on the calendar. That is what SKAL Scale does, and we only get paid when it works.',
    faqs: [
      {
        q: 'Can we use SKAL Scale alongside Clay?',
        a: 'Yes, and many of our customers do. Clay handles bespoke enrichment workflows for the inbound or expansion side. SKAL runs the outbound. They do not conflict.',
      },
      {
        q: 'Where does SKAL\'s contact data come from?',
        a: 'A proprietary in-house database we build and maintain. It is not waterfall-sourced from the same providers every other outbound team uses, which is why our reply rates tend to outperform tools that draw from the same poisoned pools.',
      },
      {
        q: 'How does pay-per-meeting actually work?',
        a: 'You pay a small one-time setup fee for ICP definition, database build, and campaign launch. After that, you pay per qualified meeting that lands on your calendar. A qualified meeting is a confirmed, attended call with a decider who matches your ICP. No-shows do not count. Pricing is shared on the discovery call.',
      },
      {
        q: 'What if I have already built a Clay stack but it is not producing meetings?',
        a: 'That is the most common reason teams move to SKAL. We can audit the existing stack on the discovery call and recommend whether to migrate fully, run SKAL in parallel as a benchmark, or simply fix what Clay is doing today.',
      },
    ],
  },
  {
    slug: 'skal-vs-apollo',
    competitor: 'Apollo',
    category: 'AI sales / outbound automation',
    hero: {
      headline: 'SKAL vs Apollo: data plus tooling vs done-for-you pipeline.',
      subhead: 'Apollo is a contact database with an outreach tool attached. SKAL Scale is the outbound function itself.',
      body: 'Apollo is the default starter for SMB outbound. Cheap, broad data, basic sequencing, and a usable Chrome extension. SKAL Scale is the opposite shape: a managed outbound service with proprietary data, written and tested sequences, and pay-per-meeting pricing. You pay Apollo to run outbound yourself. You pay SKAL to deliver meetings.',
    },
    whenToPick: {
      skal: [
        'You are done writing your own subject lines, list-cleaning, and sequence experiments.',
        'You want exclusive contact data, not the same Apollo records every other startup is hitting.',
        'You want pricing tied to qualified meetings, not seats.',
        'You have tried Apollo and reply rates have collapsed.',
      ],
      competitor: [
        'You are a 1- to 5-person team that wants the cheapest possible starting point.',
        'You have an SDR or founder who is genuinely good at writing copy and managing campaigns.',
        'Your ICP is broad enough that database breadth matters more than data exclusivity.',
      ],
    },
    table: [
      { feature: 'Pricing model', skal: 'Pay per qualified meeting + small setup fee', competitor: 'Per-seat monthly plus optional credits' },
      { feature: 'Contact data quality', skal: 'Proprietary, in-house, exclusive', competitor: 'Shared database used by tens of thousands of sales teams' },
      { feature: 'Deliverability', skal: 'We own warm-up, domains, and inbox rotation', competitor: 'You manage your own domains and warm-up' },
      { feature: 'Copy and sequencing', skal: 'Written, tested, and iterated by our team', competitor: 'You write. AI assist is template-tier.' },
      { feature: 'Channels', skal: 'Email, LinkedIn, voice', competitor: 'Email primarily, plus dialer' },
      { feature: 'Skill required', skal: 'None. We run it.', competitor: 'An SDR or operator who knows outbound' },
      { feature: 'Best for', skal: 'Founders and revenue teams who want pipeline now', competitor: 'Bootstrapped SMBs willing to learn outbound themselves' },
    ],
    honestTake: 'Apollo is fine when you are starting. It stops working when everyone else in your space is hitting the same contacts with the same templates. SKAL is what you graduate to when you are tired of falling reply rates and you want someone on the hook for meetings, not seat licenses.',
    faqs: [
      {
        q: 'My team is already using Apollo. Should we cancel it?',
        a: 'Not necessarily on day one. Many teams run SKAL Scale as the primary outbound engine and keep Apollo for ad-hoc list-building or prospect research. We will tell you on the discovery call whether the spend is duplicate.',
      },
      {
        q: 'Why is Apollo data quality dropping?',
        a: 'Two reasons. First, the same database is being hit by every outbound team in B2B, so deliverability is suffering across the board. Second, Apollo signed enterprise deals that opened the data even wider. Exclusive data sources outperform shared ones; that is why SKAL invests in proprietary contact infrastructure.',
      },
      {
        q: 'Can SKAL match Apollo on raw volume?',
        a: 'Volume is not the goal; qualified meetings are. We do not chase per-email-sent benchmarks; we optimise for meetings booked and attended, which is what pay-per-meeting pricing aligns us around.',
      },
      {
        q: 'What is the cost difference at our size?',
        a: 'Depends on volume and meeting value. At under $50K ACV, Apollo plus in-house effort is usually cheaper if you have someone running it well. Above that, pay-per-meeting almost always wins because your time is the most expensive input.',
      },
    ],
  },
  {
    slug: 'skal-vs-11x',
    competitor: '11x.ai',
    category: 'AI sales / outbound automation',
    hero: {
      headline: 'SKAL vs 11x.ai: AI SDR product vs AI sales infrastructure.',
      subhead: '11x sells you an AI persona. SKAL Scale runs your outbound as managed infrastructure.',
      body: '11x.ai pioneered the "AI SDR" category with named personas like Alice and Jordan. The product is polished and the marketing is excellent. SKAL Scale takes a different angle: we are not selling you a digital coworker, we are running the outbound function for you, with proprietary data, our own deliverability stack, and pay-per-meeting pricing. The difference matters when you care about pipeline more than the brand of the AI doing the work.',
    },
    whenToPick: {
      skal: [
        'You care about pipeline outcomes, not whether the AI has a name.',
        'You want exclusive contact data we own end to end.',
        'You want to pay only when meetings book.',
        'You want a real team behind the system, not just a product.',
      ],
      competitor: [
        'You want a packaged AI SDR you can configure yourself.',
        'You want a clean SaaS pricing model with predictable monthly cost.',
        'Your team enjoys managing a sales-AI product internally.',
      ],
    },
    table: [
      { feature: 'Pricing model', skal: 'Pay per qualified meeting + small setup fee', competitor: 'High monthly SaaS contract per AI persona' },
      { feature: 'Contact data', skal: 'Proprietary in-house database', competitor: 'Third-party data sources you configure' },
      { feature: 'Setup', skal: 'Done for you', competitor: 'Self-serve plus account-management onboarding' },
      { feature: 'Copy and sequence design', skal: 'Written and iterated by our team', competitor: 'You configure prompts, persona voice, and rules' },
      { feature: 'Multi-channel', skal: 'Email, LinkedIn, voice', competitor: 'Email and LinkedIn' },
      { feature: 'Skin in the game', skal: 'We do not get paid until you do', competitor: 'You pay regardless of meetings booked' },
      { feature: 'Best for', skal: 'Founders and revenue leaders who want pipeline', competitor: 'Sales teams who want a brandable AI SDR product' },
    ],
    honestTake: '11x built the AI-SDR category, and the product is genuinely good. The question for most buyers is what you actually want: a tool you operate, or pipeline that lands. If it is pipeline, SKAL\'s model is hard to beat because we only win when you win.',
    faqs: [
      {
        q: 'Is the AI SDR category just hype?',
        a: 'Mixed. The underlying tech (LLMs writing personalised outreach, agents booking meetings) is real and works. The hype is around the persona framing and per-seat-replacement marketing. The honest version is that AI outbound works, what differs is who carries the operational load and the risk.',
      },
      {
        q: 'How is SKAL\'s deliverability different?',
        a: 'We own the entire deliverability stack: warm-up, inbox rotation, domain reputation, content variation. Most AI-SDR products require you to bring your own domains and warm-up infrastructure, which is where deliverability quietly dies.',
      },
      {
        q: 'Can we migrate from 11x to SKAL?',
        a: 'Yes. We will audit your current setup on the discovery call. Most migrations take 1 to 2 weeks because we rebuild the data, sequences, and deliverability from scratch rather than porting the existing one.',
      },
      {
        q: 'What does "qualified meeting" mean exactly?',
        a: 'A confirmed, attended call with a decider at a B2B company who matches your ICP and has expressed active interest. No-shows do not count. Definition is locked in writing before we start.',
      },
    ],
  },
  {
    slug: 'skal-vs-salesloft',
    competitor: 'Salesloft',
    category: 'Sales engagement platforms',
    hero: {
      headline: 'SKAL vs Salesloft: enterprise engagement tool vs done-for-you outbound.',
      subhead: 'Salesloft is the workflow tool you give your sales team. SKAL Scale is the outbound team itself.',
      body: 'Salesloft (and Outreach) are mature sales-engagement platforms built for teams of 10 to 1,000 SDRs and AEs. They are excellent infrastructure if you already have a sales team that uses them every day. SKAL Scale is built for the opposite reality: companies that do not want to staff and manage a sales-engagement workflow at all. We run it as a service.',
    },
    whenToPick: {
      skal: [
        'You do not have a full SDR or AE team and do not want to build one.',
        'You want outbound to start producing meetings without 90 days of tool rollout and training.',
        'You want to pay for meetings, not seats and credits.',
        'You want to start small and scale only what is working.',
      ],
      competitor: [
        'You already have a 10+ person sales team that needs unified engagement workflows.',
        'You have a RevOps team to administer the platform and integrate with your CRM and stack.',
        'You need enterprise-grade compliance, sandboxing, and territory routing.',
      ],
    },
    table: [
      { feature: 'Buyer profile', skal: 'Founders, revenue leaders, lean teams', competitor: 'Enterprise revenue orgs with full SDR/AE teams' },
      { feature: 'Pricing model', skal: 'Pay per qualified meeting + setup fee', competitor: 'Per-seat enterprise contract, often with annual commitment' },
      { feature: 'Time to first meeting', skal: 'Days', competitor: 'Weeks to months (depends on team ramp)' },
      { feature: 'Operational burden', skal: 'We run it', competitor: 'Your team runs it on the platform' },
      { feature: 'Contact data', skal: 'Proprietary in-house', competitor: 'Bring your own or integrate a data provider' },
      { feature: 'Best for', skal: 'Companies that want outbound output, not a tool', competitor: 'Companies that want a system of record for sales activity' },
    ],
    honestTake: 'Salesloft is the right answer if you have a sales org. If you do not, and most companies under Series B do not, the platform is a luxury you cannot operationalise. SKAL is the right answer when you want pipeline outcomes without first building the sales org to run a sales-engagement tool.',
    faqs: [
      {
        q: 'We use Salesloft already. Why would we add SKAL?',
        a: 'Most commonly, teams add SKAL when their existing SDR team is at capacity and they want to expand outbound without hiring. SKAL plugs into Salesloft via the CRM so qualified meetings show up in your existing reporting.',
      },
      {
        q: 'Will SKAL replace our Salesloft seats?',
        a: 'Not unless you want to wind down internal outbound entirely. We have customers who use SKAL alongside Salesloft (Salesloft for the inbound/expansion motion, SKAL for cold pipeline) and customers who replaced internal outbound entirely with SKAL.',
      },
      {
        q: 'How does CRM integration work?',
        a: 'Two-way with HubSpot, Salesforce, Pipedrive, Close, and most major CRMs. Lead source attribution, activity logs, and meeting records flow through cleanly so your reporting stays unified.',
      },
      {
        q: 'What is the minimum commitment?',
        a: 'No annual commitment required. Setup fee plus pay-per-meeting from there. Pricing details shared on the discovery call.',
      },
    ],
  },
];

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

export function getComparisonBySlug(slug: string): Comparison | null {
  return comparisons.find((c) => c.slug === slug) ?? null;
}
