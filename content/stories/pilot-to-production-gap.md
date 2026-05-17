---
title: "Pilot to production: the gap most teams never cross"
excerpt: "AI pilots are easy to demo and brutal to ship. Six gaps that quietly kill production deployments, and the checklist we use to design for production from week one."
tag: "Playbook"
readTime: "9 min"
accent: "cyan"
publishedDate: "2026-07-29"
pullQuote: "Pilots fail because nobody designed for production from the start. Production is not a phase, it is a constraint."
---

We see the same story every quarter.

A company runs an AI pilot. The pilot works. The demo is impressive. The executive sponsor is excited. They give the green light to ship to production.

Six months later, the project is quietly shelved. The pilot still works. The production deployment never landed.

This is the most expensive pattern in B2B AI. Not because the pilot was wrong. Because nobody designed for the gap between pilot and production from week one.

This piece is the six gaps that kill production deployments, and the checklist we use to design around them.

## Why pilots fool everyone

A pilot is a controlled environment. The data is curated. The users are friendly. The edge cases are absent. The evaluation criteria are loose ("does this look impressive in a demo?").

A production system is the opposite. The data is messy. The users are skeptical. The edge cases are constant. The evaluation criteria are unforgiving (does this work for the bottom 10% of cases, every day?).

The gap is not "more engineering." The gap is conceptual. Pilot quality and production quality are different qualities, and a system that ships one will not ship the other without explicit redesign.

> Pilots fail because nobody designed for production from the start. Production is not a phase, it is a constraint.

## The six gaps

### Gap 1: data quality

The pilot ran on curated training data and hand-picked test inputs. Production runs on whatever your customers actually send. The gap is enormous.

What we see: a customer-support AI that worked perfectly in pilot on the 50 tickets the team chose to test on. In production, it sees the other 950 tickets per month, including the ones with typos, missing context, multiple languages, sarcasm, and edge cases the team never imagined.

The fix: design the pilot to run on raw production data, not curated. If your pilot only works on clean inputs, your production system will only work on clean inputs, which means it will only work on 20% of real volume.

### Gap 2: integration depth

The pilot reads from a sample database. The production system needs to read from your actual systems, write to your actual systems, handle failures across systems, and stay in sync as systems change.

What we see: an AI scheduler that worked in pilot against a test calendar. In production, it needs to handle the real calendar's permissions, time-zone bugs, recurring meeting weirdness, integration with three different tools, and the customer's own calendar conventions.

The fix: integrate to production systems during the pilot. Not "we will integrate later." Now. The integration is usually 60-80% of the actual production work, and you do not know what you are signing up for until you do it.

### Gap 3: monitoring and observability

The pilot was monitored by the engineer who built it. The production system needs to be monitored by people who do not know the internals.

What we see: a production AI deployment with no dashboard, no alerting, no per-segment performance breakdown, and no way to know whether it is degrading. The team finds out something is broken when a customer complains.

The fix: design monitoring before you ship. Per-request logs with structured metadata, evaluation scores on a sample of every day's traffic, alerting on key metrics (latency, error rate, hallucination indicators, escalation volume), and dashboards a non-engineer can read.

### Gap 4: edge cases

The pilot handled the happy path. Production sees every path.

What we see: an AI receptionist that worked beautifully on basic booking calls. In production, it had to handle: emergency calls, prank calls, telemarketers, customers calling in foreign languages, callers with hearing difficulty, customers asking medical questions it should not answer, customers asking insurance questions whose answers depend on plan specifics, and approximately fifty other categories that did not exist in the pilot.

The fix: spend the second half of the pilot listing every realistic edge case and designing the response (handle, escalate, or refuse). Production-ready means you have an answer for every edge case, even if the answer is "escalate to a human with this context."

### Gap 5: operational ownership

The pilot was owned by the technical lead. Production needs to be owned by an operational team that runs it as part of their daily work.

What we see: an AI deployment shipped to production and immediately orphaned. The technical lead moves to the next project. The customer-facing team does not feel ownership because they did not build it. Within 3-6 months, the deployment is drifting (knowledge stale, monitoring ignored, edge cases accumulating), and the team is rebuilding it from scratch or shelving it.

The fix: name the production owner before the pilot ends. The operational team that will run it day-to-day should be involved in the last two weeks of the pilot, with explicit ownership of monitoring, knowledge updates, and escalation handling.

### Gap 6: cost and rate-limit reality

The pilot ran on small volume against generous rate limits. Production hits the real numbers, and the numbers can be unforgiving.

What we see: a pilot that cost $200 in API spend per week. In production at full volume, it costs $8,000 per week. The CFO finds out from the invoice, not from the pilot estimate. The deployment is paused for "cost review," which becomes "indefinite suspension."

The fix: model production cost during the pilot. Multiply pilot cost by realistic volume ratios (often 50-200x). If the cost is uncomfortable at production volume, optimise the architecture during the pilot, not after.

## The production checklist

We run this on every SKAL deployment before going live. Use it.

### Data

- [ ] Pilot was tested on raw production data, not curated.
- [ ] Edge-case categories are enumerated and designed for.
- [ ] Data quality issues found during pilot are documented with workarounds.
- [ ] Plan exists for handling data quality issues that will surface in production.

### Integrations

- [ ] All production integrations are live during pilot, not stubbed.
- [ ] Failure modes are mapped for each integration (what happens when the calendar API is down?).
- [ ] Rate limits and quotas are documented for every external dependency.
- [ ] Webhook reliability is tested with realistic load.

### Monitoring

- [ ] Per-request logging with structured metadata is in place.
- [ ] Key metrics (latency, error rate, escalation rate, cost per request) are tracked.
- [ ] Alerts are configured with realistic thresholds.
- [ ] Dashboards exist that a non-engineer on the operational team can read.

### Edge cases

- [ ] Top 20 edge cases are explicitly designed for (handle / escalate / refuse).
- [ ] Escalation paths are tested end-to-end.
- [ ] Refusal language is reviewed and approved by legal/compliance where relevant.
- [ ] Edge cases discovered in pilot are logged with handling decisions.

### Ownership

- [ ] Production owner is named and has been involved for the last 2 weeks of pilot.
- [ ] Knowledge update process is documented (who edits, how often, what's the review).
- [ ] Escalation handling process is documented.
- [ ] On-call rotation exists if relevant.

### Cost

- [ ] Production cost is modeled at full volume, not pilot volume.
- [ ] Cost per resolved unit (per ticket, per call, per meeting) is calculated.
- [ ] Architecture has been optimised for cost where production cost exceeds budget.
- [ ] Cost alerts are configured.

If any of the boxes are unchecked, you are not ready for production. We will not ship a deployment with unchecked boxes. We have walked away from go-lives over a single unchecked box more than once.

## What it actually looks like at SKAL

[WRITER: an example of a deployment where the team caught a critical production issue during pilot specifically because of this checklist. Even better, an example of a deployment where the team did not catch it elsewhere and learned the lesson the hard way.]

The pattern: the checklist usually surfaces 3-5 issues per deployment that would have killed the production rollout. Catching them in pilot adds 1-2 weeks. Catching them in production adds 1-2 quarters of recovery work.

## When pilots should be killed early

Sometimes the right answer is to not ship to production.

Three signals that a pilot should be killed:

1. **Edge-case rate is over 30%.** If a third of real traffic falls outside the workflow the AI can handle, the AI is not the right solution. Redesign the workflow first.
2. **Cost at production volume is more than 50% of human cost.** Some workflows are better left to humans. If AI saves 30% but adds operational complexity, the math may not work.
3. **Operational owner is not bought in.** If the team that will run the system day-to-day is not enthusiastic, the deployment will drift and die. Wait until they want it.

Killing a pilot early is cheaper than killing a production deployment late. Most companies do the opposite.

## Where SKAL fits

[SKAL Systems](/systems) for deployable AI systems with production discipline built in.

[SKAL Services](/services) for custom builds where the production design is part of the scope from day one.

For more on why pilots specifically fail: [Why most AI pilots fail](/stories/why-most-ai-pilots-fail).

## FAQ

### How long does a real production deployment take after pilot?

For a SKAL Systems deployment, typically 1-2 weeks after pilot. For a custom Services build, the pilot and production are often the same project; the production discipline is built in from week one, not retrofitted at the end.

### What does it cost to retrofit production discipline?

Retrofitting is 2-4x the cost of designing for production from the start. The retrofit usually involves: rebuilding integrations, adding monitoring layers, redesigning the escalation flow, and renegotiating cost structure with the provider.

### Are there metrics we should watch closely after going live?

Yes: error rate, escalation rate, cost per resolved unit, and CSAT impact (where measurable). These four together tell you whether the deployment is working. Watch them weekly for the first 60 days.

### What's the most common reason a SKAL pilot does not move to production?

Operational ownership. The technical case is usually clear; what kills deployments is when the team that will run the system day-to-day was not part of the pilot. We have learned to force this involvement; it is non-negotiable.

### Can we go straight to production without a pilot?

For some well-understood workflows (AI receptionist for a single dental clinic, support deflection on Shopify), yes. For anything novel or custom, no. The pilot exists to find the edge cases you do not know about yet.

---

**Sitting on a pilot that has not shipped?**

Bring the project. We will tell you which of the six gaps is blocking it, and what it takes to ship.

[Book a 30-minute discovery call →](/book)
