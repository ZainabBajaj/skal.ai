import { FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SKAL',
  description: 'Terms governing the use of skal.ai and SKAL services.',
  alternates: { canonical: 'https://skal.ai/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <FileText className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">LEGAL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
              Terms &amp; Conditions
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: 27 April 2026</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#009bd7] dark:prose-a:text-[#00E1FF] prose-strong:text-[#0f172a] dark:prose-strong:text-white">
            <h2>1. Agreement</h2>
            <p>
              By using <a href="https://skal.ai">skal.ai</a> or engaging SKAL for any service, you agree to these terms.
              If you do not agree, do not use the site or our services.
            </p>

            <h2>2. Services</h2>
            <p>
              SKAL offers four product lines: SKAL Scale (outbound automation), SKAL Systems (AI agents), SKAL Services (custom builds), and SKAL Staffing (talent placement).
              The scope of any specific engagement is defined in a signed proposal or statement of work between you and SKAL.
            </p>

            <h2>3. Use of the site</h2>
            <p>
              You may browse skal.ai for personal or business research. Without prior written permission, you may not:
            </p>
            <ul>
              <li>Republish material from skal.ai.</li>
              <li>Sell, rent, or sub-license material from skal.ai.</li>
              <li>Reproduce, duplicate, or copy material from skal.ai.</li>
              <li>Redistribute content from skal.ai.</li>
              <li>Scrape or mirror substantive portions of the site.</li>
            </ul>

            <h2>4. Payment and billing</h2>
            <p>
              Pricing and payment terms for engagements are set out in the relevant proposal or statement of work. SKAL Scale uses a per-qualified-meeting pricing model; details are confirmed before any work begins.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              Subject to the terms of your engagement, deliverables built specifically for you under a paid SKAL engagement become your property on full payment. Pre-existing SKAL tools, frameworks, and the proprietary contact database referenced in SKAL Scale remain the property of SKAL.
            </p>

            <h2>6. Linking and embedding</h2>
            <p>
              Government agencies, search engines, news organisations, and online directory distributors may link to skal.ai without prior written approval, provided the link is not deceptive, does not falsely imply sponsorship or endorsement, and fits within the context of the linking party&apos;s site. Other organisations may request a link by emailing <a href="mailto:info@skal.ai">info@skal.ai</a> with their name, organisation, contact details, the URL of their site, and the URLs they intend to link to and from. We respond within one to two weeks.
            </p>
            <p>
              You may not create frames, iframes, or other embeds around our pages that alter our visual presentation or appearance without prior written permission. No use of SKAL&apos;s logo or other trademarks is allowed without a separate trademark licence.
            </p>
            <p>
              We reserve the right to ask you to remove any link to skal.ai. If we make such a request, you agree to remove the link promptly. If you find a link on our site that you consider offensive, email us and we will consider the request, though we are not obliged to act on every one.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              SKAL will treat your business information, data, and any materials you share during an engagement as confidential. You will treat SKAL&apos;s pricing, methods, and unreleased work as confidential. Specifics are governed by the mutual NDA signed at the start of an engagement.
            </p>

            <h2>8. Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, SKAL excludes all representations, warranties, and conditions relating to skal.ai and its use. We do not warrant that the site is error-free, complete, accurate, available without interruption, or kept up to date at all times. While the site and its information are provided free of charge, SKAL is not liable for any loss or damage of any nature arising from your use of the site.
            </p>
            <p>
              Nothing in this disclaimer limits or excludes liability for death or personal injury, fraud or fraudulent misrepresentation, or any liability that cannot be limited or excluded under applicable law.
            </p>
            <p>
              You are responsible for the content of any third-party site you reach through a link from skal.ai. SKAL is not responsible for content on sites that link to or from us, and no link should appear on any site that may be interpreted as defamatory, obscene, criminal, or that infringes the rights of any third party.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              SKAL&apos;s total liability for any claim arising from an engagement is capped at the amount you paid SKAL in the twelve months preceding the claim. SKAL is not liable for indirect, consequential, or incidental damages.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any dispute will be resolved in the courts of Dubai.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions about these terms? Email <a href="mailto:info@skal.ai">info@skal.ai</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
