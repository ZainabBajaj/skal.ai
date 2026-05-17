---
title: "Pay-per-meeting: the contract that aligns AI sales"
excerpt: "Most AI sales tools charge you whether they work or not. Pay-per-qualified-meeting flips the incentive. Here is exactly how the contract works, why we built it this way, and when it is the wrong fit."
tag: "Process"
readTime: "7 min"
accent: "teal"
publishedDate: "2026-07-15"
pullQuote: "If the AI sales tool is not paid based on meetings, the AI sales tool is not optimised for meetings."
---

Every other AI sales tool charges you to use the tool.

You pay a seat license, a credit pool, or an enterprise contract. Then the tool produces outcomes, or it does not, and your contract terms do not change either way.

SKAL Scale charges you per qualified meeting that lands on your calendar.

This piece is about why that one contractual difference reshapes everything else in the relationship, what counts as "qualified" exactly, when this pricing is the right fit, and the small but real cases where it is not.

## Why pricing is the architecture

Every pricing model encodes an incentive. The model the vendor charges on is the metric the vendor optimises for.

A seat-licensed AI sales tool optimises for ease of starting (low monthly cost, easy procurement). It does not optimise for whether you actually get meetings, because the contract does not require it.

A credit-based AI sales tool optimises for volume of sends. The more you send, the more credits you burn. Outcomes are downstream of volume but not aligned to it.

An enterprise-contract AI sales tool optimises for annual commitments and renewal cycles. The product roadmap follows what makes enterprise buyers re-up, which is rarely "more meetings per dollar."

Pay-per-qualified-meeting flips the optimisation. The vendor only gets paid when the customer gets paid. So every decision in the system — data quality, deliverability, sequencing, personalisation, reply speed — is in service of the same metric.

> If the AI sales tool is not paid based on meetings, the AI sales tool is not optimised for meetings.

## How the contract works

The structure is simple. The definitions are what matter.

### Setup fee

A one-time payment that covers ICP definition, contact data build, copy drafting, deliverability infrastructure setup, and CRM integration. Quoted on the discovery call; varies based on complexity.

Why a setup fee at all: because the first 4-6 weeks of work are the same regardless of how many meetings result, and we cannot float that cost across customers who decide outbound was not the right move for them.

### Per-qualified-meeting fee

Paid each time a qualified meeting lands on your calendar. Quoted on the discovery call; varies based on ACV, ICP, and meeting value.

The fee is fixed per meeting, not a percentage. We do this because percentage pricing creates perverse incentives (pushing you toward smaller, lower-value meetings is easier than larger ones).

### No retainer, no monthly minimum

If a month happens with zero qualified meetings, you pay zero. We have skin in the game.

In practice, this almost never happens after the first 30 days. Our economics depend on the system actually producing meetings, so we do not start customer engagements unless we believe the math works.

### No-shows do not count

A qualified meeting only counts if the prospect actually attends the call. Books that get rescheduled count once they happen. Books that ghost do not count at all.

This is the single most-asked-about contract term, because every other tool counts "bookings" rather than "attended meetings." The difference matters: a tool optimising for bookings has every incentive to book low-quality prospects who will no-show. We do not.

### Defined qualification criteria

What counts as "qualified" is written down explicitly before we start. Typical criteria:

- The attendee matches the agreed ICP (role, company size, geo, industry).
- The attendee has decision authority or buying influence.
- The conversation lasts at least 15 minutes (or to your defined threshold).
- The attendee has stated interest in the relevant capability.

Disputes are rare because the criteria are locked in writing. If a meeting clearly does not meet the criteria, it does not count. If it is borderline, we err in your favor; we would rather lose the fee than the relationship.

## What it costs to be wrong about a meeting

Hidden subtext: pay-per-meeting only works when both sides are clear about what a meeting is worth.

The math:

- If a meeting is worth $X to you (in expected pipeline value, not closed revenue), we should price below $X by enough margin to be a clear win for you.
- If our per-meeting price is higher than $X, the math does not work and we should not start.
- Most engagements settle around 5-10% of expected pipeline value per meeting, which leaves a substantial margin for you.

For a SaaS company with $80K ACV and a 25% qualified-to-closed rate, the expected value of a qualified meeting is $20K. A per-meeting fee of $500-1,000 is comfortably in the right zone.

For a low-ACV consumer-services business with $200 LTV, no managed AI sales service makes sense. The economics do not work for either side, and we will say so on the discovery call.

## When pay-per-meeting is the right fit

Three patterns where this pricing model is clearly the best fit.

### 1. Founders who do not have a sales team yet

You are pre-Series A or early Series A. You are doing outbound yourself. You want pipeline without hiring three SDRs and a sales lead. Pay-per-meeting lets you scale outbound without scaling fixed costs.

### 2. Companies with high-ACV deals and slow internal sales hires

Your average deal is $50K+ and your sales hire timeline is 90 days. Pay-per-meeting fills the gap immediately while you hire. Cost-per-meeting is comfortably below cost-per-meeting from your internal hires.

### 3. Companies that have tried tool-based outbound and watched it underperform

You bought Clay, Apollo, or 11x. The reply rates were OK but the meetings did not materialise. You want a vendor whose contract aligns with the actual outcome, not the activity.

## When pay-per-meeting is the wrong fit

We turn down customers in three categories.

### 1. ACV below $5K

The economics break. You should be running paid acquisition and product-led growth, not managed outbound.

### 2. Very broad ICPs

If your target is "any business owner," we cannot personalise enough to drive the reply rates that justify pay-per-meeting pricing. Narrow your ICP first, then come back.

### 3. Companies with internal SDR teams already producing meetings at scale

If your internal team is producing 100+ qualified meetings per month already, the marginal value of adding our system is lower than the marginal cost. Layered tools and processes work better at that scale.

## What this looks like in production

[WRITER: insert a specific customer example with numbers, anonymised. Pattern: "Series A SaaS, $60K ACV, started with us in week X, by week Y was producing N meetings per month at price P, expected pipeline value of $V."]

## The honest disqualification

We say this on every discovery call:

If our per-meeting fee is higher than 10% of your expected meeting value, walk away. If our setup fee is more than 2 months of your current outbound spend, walk away. If you cannot tell us your expected meeting value, work on that before starting outbound at all.

## Where SKAL fits

[SKAL Scale](/scale) is the only product we sell on pay-per-qualified-meeting pricing. The other three (Systems, Services, Staffing) have different pricing models that align with their respective work.

For the full architecture of how Scale actually books meetings: [the architecture story](/stories/architecture-of-ai-sales-system-that-books-meetings).

For comparisons against other AI sales tools that use different pricing: [SKAL alternatives](/compare).

## FAQ

### What if a meeting books but the prospect cancels before the call?

If they reschedule, the meeting counts once it actually happens. If they cancel and do not reschedule, it does not count.

### What if the prospect shows up but is not qualified?

If the lead falls clearly outside the criteria we agreed on (wrong industry, wrong company size, not a decision-maker), it does not count. We have a structured review process for borderline cases; it is rare for these to be in dispute.

### How quickly do meetings start landing?

Typical pattern: setup takes 1-2 weeks, first qualified meetings book in week 3, steady-state volume reached by week 6-8.

### What if our ICP changes mid-engagement?

Then we redefine the qualification criteria together and re-baseline. The contract is flexible on the substance; what stays consistent is the structure of pay-per-result.

### Are there any volume guarantees?

No. We will give you our honest estimate on the discovery call, but we do not guarantee specific meeting volumes because too much depends on factors we cannot promise (your ICP attractiveness, your product positioning, the market). What we do guarantee is the contract structure: you only pay for actual results.

### What is the typical per-meeting fee?

Quoted on the discovery call based on your ACV, ICP, and meeting value. The math we work through ensures it is a clear win for you; otherwise we do not start.

---

**Evaluating outbound spend right now?**

Bring your numbers. If pay-per-meeting is the right structure, we will tell you. If a different vendor or model fits better, we will say so. No pitch.

[Book a 30-minute discovery call →](/book)
