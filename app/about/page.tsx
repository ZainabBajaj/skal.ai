'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-[#009bd7]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Left: Portrait */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5] rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/60 dark:border-gray-700/60">
                  <Image
                    src="/founder.jpg"
                    alt="Portrait of the SKAL founder"
                    width={900}
                    height={1200}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Intro */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
                <Sparkles className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">FOUNDER&apos;S STORY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
                Practitioners, not{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  generalists.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                SKAL exists because most businesses that want AI systems don&apos;t know how to build them,
                and most technical teams that can build them don&apos;t understand business well enough to build them right.
                We sit at that intersection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-2xl sm:text-3xl font-semibold text-[#0f172a] dark:text-white leading-snug">
                My first business was a pop-up fry stall. I was ten.
              </p>

              <p>
                What I remember most is not the fries. It is that while other kids were eating them, I
                was thinking about the ingredients, the margins, the foot traffic. I realised later that
                not everyone thought that way. I grew up in a family that ran businesses across spinning
                mills, FMCG, and banquet halls. Reading a balance sheet came before most other things.
                Business was not something I studied. It was the water I grew up in.
              </p>

              <p>
                In O levels, I made a list of things I thought about the most and tracked my thought
                patterns. Business was at the top. But so was something else: a fascination with
                technology. Not technology for its own sake, but what it could do inside a business.
                The idea that you could build systems sophisticated enough to eventually replace
                yourself in the value chain felt like the most interesting problem in the world.
              </p>

              <p>
                I went after it seriously. I graduated with one of the highest marks in the world in{' '}
                <span className="font-semibold text-[#0f172a] dark:text-white">Data Science and Business Analytics</span>,
                earning a{' '}
                <span className="font-semibold text-[#009bd7] dark:text-[#00E1FF]">London School of Economics Letter of Commendation</span>.
                I built a course called{' '}
                <em className="text-[#0f172a] dark:text-white">Transforming Organisations with Data Storytelling</em>{' '}
                and delivered it at the National University of Singapore, because I believe that how you
                present data matters as much as what the data says. I have always had an instinct with
                data. I can look at a dataset and tell you what it means before I have run a single
                calculation.
              </p>

              <p>
                When AI agents arrived, it felt like the logical end of a thread I had been pulling
                since I was ten. An agent is the most complete expression of the idea I fell in love
                with at seventeen: a system that creates leverage, that works while you sleep, that
                lets you operate at the top of the value chain instead of being consumed by it.
              </p>

              <div className="my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#009bd7]/5 via-[#00E1FF]/5 to-[#1DB5C5]/5 dark:from-[#009bd7]/10 dark:via-[#00E1FF]/10 dark:to-[#1DB5C5]/10 border border-[#009bd7]/20 dark:border-[#00E1FF]/20">
                <p className="text-xl sm:text-2xl font-semibold text-[#0f172a] dark:text-white leading-snug">
                  SKAL exists because most businesses that want this don&apos;t know how to build it, and
                  most technical teams that can build it don&apos;t understand the business well enough to
                  build it right. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">We sit at that intersection.</span>
                </p>
              </div>

              <p>
                We are registered in Dubai with an office in Lahore, and a growing team of engineers and
                AI specialists who share the same obsession.
              </p>

              <p className="text-xl sm:text-2xl font-semibold text-[#0f172a] dark:text-white leading-snug pt-4">
                We are not generalists who discovered AI last year. We are practitioners who have been
                building toward this for a long time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-10 sm:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#009bd7]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00E1FF]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
                Want to see what practitioners build?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Start a conversation. No pitch decks, no fluff. Just a discovery call to understand the
                shape of your problem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/skal-ai/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                >
                  Schedule a Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/systems"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#00E1FF] text-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#00E1FF] hover:text-[#0f172a] hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
