---
title: "Build vs buy: a framework for B2B AI"
excerpt: "Most teams buy what they should build and build what they should buy. A four-question framework for getting the call right, with worked examples."
tag: "Playbook"
readTime: "9 min"
accent: "blue"
publishedDate: "2026-06-03"
pullQuote: "Most teams buy what they should build and build what they should buy."
---

The build-vs-buy decision is the most expensive call a B2B operator makes on AI, and it is almost always made wrong.

We have watched both sides of the mistake. Companies spending eighteen months building a chatbot they could have bought for $300 a month. Companies bolting together five SaaS tools to solve a workflow that one custom internal system would have handled cleanly in three weeks.

The decision is not "build is for ambitious companies." It is "build when the answer is not on the shelf, buy when it is."

This is the framework we use to make the call.

## The four questions

For any AI capability you are considering, run it through these in order. The answers tell you where you should land.

### Question 1: Is the workflow your business runs on?

If yes, build. If no, buy.

The principle is simple: the things that define your business as different from your competitors are the things you should own. The things that are commodity infrastructure are the things you should rent.

For a B2B SaaS company, your authentication flow is commodity. Your customer support workflow is mostly commodity. Your specific sales motion might be different from your competitors. Your internal operating procedures are.

The test:
- "If a competitor copied this exact workflow, would it matter?" If no, buy.
- "Does this workflow encode something we know that nobody else knows?" If yes, build.

Most companies get this wrong by building their auth and buying their internal ops tooling. It should be the reverse.

### Question 2: Is there a credible off-the-shelf option?

If no, build (or contract a custom build). If yes, evaluate carefully.

Credible means three things:

1. The tool exists at the maturity stage you need (not "in beta, three customers").
2. It covers at least 80% of your specific requirements without customisation.
3. The vendor will exist in three years.

Most categories have three or four credible options. Some categories (industry-specific internal tooling, weird operational workflows) have none. Those are the build candidates by default.

### Question 3: How fast does it need to ship?

If under four weeks, buy.

Building anything substantive in under four weeks is a fantasy. Even our fastest custom deployments at SKAL Services run six to ten weeks for a real production system. If you have a six-week deadline, buy something off the shelf and customise around the edges.

The exception: building on top of a flexible primitive (a workflow engine, an LLM provider, a database) where you are configuring rather than coding. Those can ship in days.

### Question 4: What does it cost to be wrong?

If the answer is "we change vendors next year and lose nothing," buy. If the answer is "we are stuck for five years," build or contract a custom build with a clear ownership transfer.

The hidden cost of buying is lock-in. Most SaaS vendors are great until they pivot, get acquired, or raise prices. If the cost of switching is high, the appropriate-sounding monthly fee is actually a long-term liability.

## Where the categories actually land

For B2B AI specifically, here is where we see the cleanest answers.

### Almost always buy

- **Customer support knowledge bases.** Intercom, Pylon, Plain. The category is mature.
- **Email and calendar.** Google or Microsoft. Stop thinking about this.
- **CRM.** HubSpot or Salesforce. The integrations matter more than the CRM itself.
- **AI coding assistants.** Cursor, Claude Code, Windsurf. Buy the best, switch when better arrives.
- **Off-the-shelf voice or chat AI for generic workflows.** Lots of options.

### Almost always custom

- **Your internal operating procedures.** The exact way your team runs sales handoffs, customer onboarding, or QA. Off-the-shelf workflow tools force your business into their shape. Custom internal tooling shapes itself to your business.
- **Anything that integrates four or more of your systems in a specific sequence.** No vendor will get the sequence right because it is unique to you.
- **AI workflows that encode your proprietary knowledge.** A sales-AI trained on your specific positioning. A support-AI that knows your specific product. A receptionist trained on your specific business. Generic AI products approximate this. Custom builds land it.

### Depends — run the framework

- **AI sales tools.** Buy a managed service like [SKAL Scale](/scale) if you want pipeline. Buy a tool like Clay if you have an operator. Build custom if you have a sales-engineering team and a moat reason to own it. See [the SDR vs AI piece](/stories/sdr-vs-ai-when-to-hire-when-to-deploy) for the matrix.
- **Internal dashboards.** Build if your data shape is unique. Buy (Hex, Metabase, Mode) if it is standard.
- **AI receptionists.** Buy from a managed provider like [SKAL Systems](/systems) for most cases. Build only if your industry has unusual escalation requirements.

## Two worked examples

### Example 1: e-commerce brand at $5M GMV

[WRITER: adjust to a real composite if possible.]

A DTC brand selling supplements. They are losing 30% of inbound support tickets to slow response. The team is two founders plus one part-time CX person.

Run the framework:

1. **Is the workflow your business runs on?** No. Support is operational, not differentiating. Their differentiation is product and brand, not how they answer "where is my order."
2. **Is there a credible off-the-shelf option?** Yes. Gorgias plus AI add-ons. SKAL Systems for the AI layer.
3. **How fast does it need to ship?** Six weeks before holiday rush.
4. **What does it cost to be wrong?** Low. Support tooling is portable.

**Verdict: buy.** Specifically, deploy SKAL Systems for AI support on top of their existing Gorgias instance. Custom internal tooling would have been a six-month detour with no upside.

### Example 2: legal services firm with niche immigration practice

A 12-person law firm specialising in a specific immigration vertical. They handle 200+ inbound intake calls per month. Their workflow is highly specific to their practice area and changes based on country-by-country policy shifts.

Run the framework:

1. **Is the workflow your business runs on?** Yes. The intake quality, the conflict checks, the case-specific qualification are the business.
2. **Is there a credible off-the-shelf option?** Partially. Generic AI receptionists handle the calls. None of them know immigration law.
3. **How fast does it need to ship?** Twelve weeks acceptable.
4. **What does it cost to be wrong?** High. Mishandling a case at intake costs the firm and the client.

**Verdict: custom.** SKAL Services builds a bespoke intake system on top of their case management software, with country-by-country qualification logic the firm controls and updates themselves. Generic tooling would have approximated. Custom landed it.

## The decision tree, in one image

```
                Is the workflow your business runs on?
                              │
                ┌─────────────┴─────────────┐
              YES                          NO
               │                            │
       Build or custom              Is there a credible
                                   off-the-shelf option?
                                          │
                          ┌───────────────┴───────────────┐
                        YES                              NO
                         │                                │
              How fast must it ship?               Build or custom
                         │
                ┌────────┴────────┐
            Under 4 weeks    Over 4 weeks
                │                  │
              Buy            Run cost-of-being-wrong test
                                   │
                          ┌────────┴────────┐
                       Low cost           High cost
                          │                  │
                         Buy            Custom build with
                                       ownership transfer
```

## The four traps to avoid

### Trap 1: Building because it sounds impressive

Half the "we built our own AI" stories you read on LinkedIn are companies that should have bought something off the shelf. The complexity is the achievement, not the customer outcome.

### Trap 2: Buying because everyone else is

Buying the same six SaaS tools your peers buy is a default. It is rarely the answer. The right buy is the one that solves your specific problem, not the one in the latest GTM blog post.

### Trap 3: Building the wrong layer

You should almost never build the AI model. You should sometimes build the application layer on top of someone else's model. The distinction is huge.

### Trap 4: Treating it as one-time

The build-vs-buy decision is not permanent. The right answer at $1M ARR is rarely the right answer at $50M. Revisit annually.

## Where SKAL fits

[SKAL Services](/services) is for the custom builds. Internal AI tooling, workflow automation, software built specifically for how your business operates.

[SKAL Systems](/systems) is for the buys. Packaged AI systems for support, sales, and inbound operations.

If you are not sure which one you need, the discovery call covers it. We tell you when off-the-shelf is the right answer. We have turned away builds when the customer should have bought instead.

## FAQ

### What is the ROI threshold for a custom build?

Roughly $200K in annual value created or saved for a typical 6-10 week custom build. Below that, buy. Above that, the math usually works.

### How do I tell if a category is mature?

Three questions: How many credible vendors exist? How long have the top two been profitable? How many of your peers are using one of them? If all three answers are encouraging, the category is mature enough to buy.

### What about open-source AI models — does that change build vs buy?

Yes, but mostly at the infrastructure layer, not the workflow layer. You should rarely build the model. You should consider self-hosting an open-source model if data residency, cost at scale, or specific tuning matters.

### Can we start with a buy and migrate to custom later?

Yes, and this is usually the right approach. Buy to validate the workflow. Once you know exactly what you need, custom build to own it. The data you collect on the bought system becomes the spec for the custom one.

### How long does a typical custom build take with SKAL Services?

6-10 weeks for a production-grade internal system. Shorter for simpler workflows. We scope and quote before we start, so timeline is fixed.

---

**Trying to make the call?**

Bring the workflow. We will run the framework with you and tell you which side it lands on, with no obligation. We have talked customers out of building, and out of buying, when the math said so.

[Book a 30-minute discovery call →](/book)
