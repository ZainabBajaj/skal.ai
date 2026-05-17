---
title: "The AI engineering hiring loop is broken"
excerpt: "Resumes, take-homes, and system-design rounds were designed for a different kind of engineer. Here is what we screen for instead, and why most teams hire the wrong AI-engineering profile."
tag: "Staffing"
readTime: "7 min"
accent: "teal"
publishedDate: "2026-06-24"
pullQuote: "AI-native is a workflow, not a skill set."
---

Most companies hiring "AI engineers" in 2026 are running the 2019 playbook against a job that has changed entirely.

They post for "ML Engineer with 5+ years experience." They run a take-home that asks the candidate to fine-tune a model on a public dataset. They do a system-design round about scaling a recommendation system.

Then they hire, and the engineer who lands cannot ship a single production AI feature in their first 90 days.

The loop is not screening for the work that actually needs to be done. This piece is about what changed, and what to screen for instead.

## What the job actually is now

"AI engineer" today is not "machine learning researcher" plus the ability to ship. It is something different.

The job is: take a problem, decompose it into LLM calls, agent steps, and traditional code, glue together five APIs and three providers, run the result in production, observe the failures, and iterate fast.

It is closer to a senior product engineer who happens to be fluent in AI tooling than to an ML researcher who happens to know how to ship.

The skill set that matters:

- **Fluency in modern AI tooling.** Cursor, Claude Code, Windsurf, and the underlying API surfaces. The engineer who is still typing every line in vim is moving 5x slower than the one paired with an AI coding assistant. We screen for this directly.
- **Decomposition.** Can you take a vague business problem and chunk it into deterministic and probabilistic pieces? The deterministic pieces are code. The probabilistic pieces are LLM calls. Knowing where the line goes is the work.
- **Integration thinking.** Most AI features in 2026 are 70% integration, 20% prompt engineering, 10% model. Engineers who treat the model as the work get stuck.
- **Speed of iteration.** AI features ship faster than traditional features because the failure modes are continuous. The engineer who waits two weeks before testing in production is shipping the wrong thing.
- **Production discipline.** Monitoring, evals, rate limits, cost tracking, graceful degradation. Not glamorous. Decisive.

> AI-native is a workflow, not a skill set.

## What we screen for, in order

At SKAL Staffing, we filter roughly 100 candidates down to 5 we put in front of customers. Here is the funnel.

### 1. Tool fluency check (30 minutes)

Pair with the candidate. Ask them to add a small feature to a sample codebase using their AI coding tool of choice. Watch.

What we are watching for:

- Do they actually use the tool, or revert to manual edits?
- Can they prompt the AI to do useful work, then verify and refactor what comes back?
- Do they catch when the AI is hallucinating?

Most candidates who claim "AI-native" experience fail this in the first 10 minutes. The ones who pass are visibly different to work with.

### 2. Decomposition exercise (45 minutes)

Give the candidate a fuzzy business problem. "A 50-person law firm wants to automate intake. They use Clio. They handle 200 inbound calls a week. Design the system."

We are not looking for a perfect answer. We are looking for:

- Do they ask the right clarifying questions?
- Can they identify which parts are deterministic vs probabilistic?
- Do they pick reasonable building blocks (LLM provider, voice provider, workflow engine, integration layer)?
- Do they think about failure modes from the start?

The signal: candidates who jump straight to "I would use OpenAI / Claude" without scoping the workflow are pattern-matching. Candidates who scope the workflow first and then pick tools are reasoning.

### 3. Integration project (4 hours, async)

A small project that requires touching at least three APIs in a useful way. Submit the working code plus a 5-minute Loom walking through the decisions.

What separates submissions:

- Did they handle the edge cases (rate limits, partial failures, latency)?
- Did they add basic observability (logs, traces)?
- Did they use AI tooling visibly during the build?
- Is the code maintainable, or a one-shot script?

Roughly 70% of candidates fail this stage. Most submit something that works on the happy path and falls over the moment a real user tries it.

### 4. Live debugging session (60 minutes)

A live screen-share where we hand them a broken system and ask them to fix it. The bug is realistic: a prompt regression, a rate-limit issue, an integration that broke because an upstream provider changed a default.

We are watching:

- Do they reproduce the bug systematically or guess?
- Do they read logs and traces, or stab in the dark?
- Can they form and test a hypothesis under time pressure?
- Do they reach for AI tooling to help, or treat it as cheating?

The last point matters most. The engineers who pair with their AI tools during debugging are 3-5x faster than the ones who do not. This is the central skill of the role.

### 5. Reference checks with specifics

We do not ask "would you hire them again." We ask:

- "Tell me about a specific AI feature they shipped. How long did it take? What broke?"
- "What did they do when the model behaved unexpectedly in production?"
- "What is one thing they got wrong?"

Vague references get rejected. Specific ones move forward.

## What we explicitly do not screen for

Three things that look like signal and are not.

### 1. Degree from a top university

Mild positive correlation with raw capability. Zero correlation with whether they can ship an AI feature in week one. We have hired engineers with PhDs and engineers who left college early. The PhDs are not better at this work.

### 2. Years of ML research experience

The role does not require it. ML research is a different job. Some research engineers transition well. Many do not, because the production discipline is different.

### 3. Public profile (Twitter, blogs, GitHub stars)

Useful for sourcing. Not useful for screening. We have hired engineers with zero public profile who outperform the loudest names.

## The embedded model

The other half of why hiring is broken: the model itself.

Most companies hire full-time AI engineers and then under-utilise them. The role is project-shaped, not headcount-shaped. You need a senior AI-native engineer for 3-6 months to ship the system. After that, the system needs maintenance, not net-new building.

The embedded model fits the shape better:

- A senior AI-native engineer drops into your team for a defined period.
- They ship the build with your existing engineers shadowing.
- They hand off documentation, evals, and monitoring.
- You keep them on retainer for follow-up work.

This is what [SKAL Staffing](/staffing) does. It is not a talent marketplace. It is a managed embedded-engineering function where the operators are pre-screened against the loop above.

The pricing is hourly. The minimum engagement is typically 4 weeks. We have engineers in your workflow inside 5 business days.

## What this looks like in practice

[WRITER: a specific customer example. "Company X needed an AI receptionist for their dental practice and we embedded an engineer for 6 weeks to build it, then handed off to internal team."]

The pattern repeats:

- Week 1-2: scoping, integration discovery, baseline build.
- Week 3-4: production deployment, monitoring, eval setup.
- Week 5-6: handoff with documentation, training, and on-call coverage transition.

## What you do if you are hiring directly

If you are not using an embedded service like SKAL Staffing and you are hiring AI engineers directly, the framework above is yours to copy.

The single most predictive interview signal we have found: ask the candidate to share their screen and ship a working feature using their AI tools, on a real codebase, in 30 minutes. Watch them work.

You will know in 10 minutes.

## Where SKAL fits

[SKAL Staffing](/staffing) for embedded AI-native operators.

For more on the AI engineering hiring problem: [Hiring the top 5%](/stories/hiring-the-top-five-percent).

## FAQ

### How is "AI-native" different from "knows how to use ChatGPT"?

ChatGPT use is the floor. AI-native means the engineer's entire workflow is restructured around pairing with AI tools. They prompt the AI to draft code, they prompt the AI to review it, they prompt the AI to write tests, they prompt the AI to debug. Their throughput is 3-5x a traditional engineer.

### Can you tell quickly if a candidate is AI-native or just claims to be?

Yes, in under 10 minutes of pair programming. The workflow looks different.

### What ratio of full-time hires to embedded engineers do you recommend?

For most companies under 50 engineers, mostly embedded. Hire full-time only for roles that need deep institutional knowledge over years.

### How long does the SKAL screening process take?

About 2 weeks per candidate end-to-end. We hold candidates in a bench while customers come through, so for the customer the experience is "engineer in your workflow inside 5 business days."

### What does the engineer cost?

Hourly rate quoted on the discovery call. Comparable to senior contractor rates from a top firm, but the engineers are pre-screened against the loop above.

---

**Hiring AI engineers right now?**

If you are running the 2019 playbook against the 2026 job, the cost is invisible until you ship nothing for a year. The embedded model fits most companies better. Book a call.

[Book a 30-minute discovery call →](/book)
