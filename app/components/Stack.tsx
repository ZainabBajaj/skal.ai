"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  /**
   * Filename in /public/svgs. Leave empty when there is no logo file for it —
   * the tile then sets the name in the display face instead. That is on
   * purpose: Claude and ElevenLabs are named in the page copy three times as
   * what the systems run on, and shipping an approximated version of somebody
   * else's mark to fill the hole is worse than setting their name in type.
   */
  svgName: string;
  color: string;
  bgGradient: string;
}

const Stack = () => {
  const [activeTab, setActiveTab] = useState('All');

  const technologies = {
    'Front-End': [
      { name: 'HTML', svgName: 'html.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'CSS', svgName: 'css.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Javascript', svgName: 'javascript.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'React JS', svgName: 'react.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Vue JS', svgName: 'vuejs.svg', color: 'text-green-500', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Angular', svgName: 'angular.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
    ],
    'Back-End': [
      { name: 'Node.js', svgName: 'node_js.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Python', svgName: 'python.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'Java', svgName: 'java.svg', color: 'text-orange-600', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PHP', svgName: 'php.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
      { name: 'Golang', svgName: 'golang.svg', color: 'text-cyan-500', bgGradient: 'from-cyan-100 to-cyan-50' },
      { name: 'C#', svgName: 'c#.svg', color: 'text-purple-700', bgGradient: 'from-purple-100 to-violet-50' },
    ],
    'Database': [
      { name: 'MongoDB', svgName: 'mangodb.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'PostgreSQL', svgName: 'postgresql.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'MySQL', svgName: 'mysql.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'Redis', svgName: 'redis.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
      { name: 'Firebase', svgName: 'firebase.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'SQLite', svgName: 'sqlite.svg', color: 'text-gray-600', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'DevOps': [
      { name: 'Docker', svgName: 'docker.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Kubernetes', svgName: 'kubernetes.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'AWS', svgName: 'aws.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Azure', svgName: 'azure.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Jenkins', svgName: 'jenkins.svg', color: 'text-gray-600', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'GitHub Actions', svgName: 'GitHub Actions.svg', color: 'text-gray-800', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'AI & ML': [
      { name: 'Claude', svgName: '', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'ElevenLabs', svgName: '', color: 'text-ink', bgGradient: 'from-gray-100 to-gray-50' },
      { name: 'Hugging Face', svgName: 'hf-logo.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'Langchain', svgName: 'Langchain.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
      { name: 'TensorFlow', svgName: 'tensorflow.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PyTorch', svgName: 'pytorch.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-orange-50' },
      { name: 'OpenAI', svgName: 'open_ai.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'Scikit-learn', svgName: 'Scikit_learn.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-sky-50' },
    ],
    'Low/No Code': [
      { name: 'Bubble', svgName: 'bubble.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Webflow', svgName: 'webflow.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-indigo-50' },
      { name: 'Zapier', svgName: 'zapier.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Airtable', svgName: 'Airtable.svg', color: 'text-yellow-600', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'Notion', svgName: 'notion.svg', color: 'text-gray-800', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'Make', svgName: 'make.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
    ]
  };

  const tabs = ['All', 'Front-End', 'Back-End', 'Low/No Code', 'Database', 'DevOps', 'AI & ML'];

  const getDisplayedTechnologies = () => {
    if (activeTab === 'All') {
      return {
        'Front-End': technologies['Front-End'],
        'Back-End': technologies['Back-End'],
        'Database': technologies['Database'],
        'DevOps': technologies['DevOps'],
        'Low/No Code': technologies['Low/No Code'],
        'AI & ML': technologies['AI & ML']
      };
    }
    return { [activeTab]: technologies[activeTab as keyof typeof technologies] || [] };
  };

  const renderIcon = (tech: Technology) => {
    // Handle special characters in filenames
    let svgPath = tech.svgName;
    if (tech.svgName === 'c#.svg') {
      svgPath = 'c%23.svg';
    }
    
    if (!tech.svgName) {
      return (
        <div className="w-9 h-9 flex items-center justify-center">
          <span className="font-display text-[1.5rem] leading-none text-ink">
            {tech.name.charAt(0)}
          </span>
        </div>
      );
    }

    return (
      <div className="w-9 h-9 relative">
        <Image
          src={`/svgs/${svgPath}`}
          alt={tech.name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  return (
    <div id="stack">
      <div className="spec">
        <span className="t-label t-label--ink">Our tech stack</span>
        <span className="t-label">What we build with</span>
      </div>

      <h2 className="font-display t-h2 text-ink mt-8 max-w-[16ch]">
        The tools underneath the systems.
      </h2>

      {/* Tabs read as a filter, not as a hero control. */}
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-b border-rule pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
              activeTab === tab ? 'text-ink' : 'text-ink-3 hover:text-ink'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Rules come from each cell's own right and bottom border, with the top
          and left supplied by the list. The previous version painted the list
          `bg-rule` and let a 1px gap show it through, which works only while
          the last row is full — the unfilled cells rendered as solid grey
          blocks, and the count changes with both the filter and the
          breakpoint. */}
      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-rule">
        {Object.values(getDisplayedTechnologies()).flat().map((tech: Technology, index: number) => (
          <li
            key={`${tech.name}-${index}`}
            className="border-r border-b border-rule bg-surface flex flex-col items-center justify-center gap-3 py-8 px-3 text-center"
          >
            {renderIcon(tech)}
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;
