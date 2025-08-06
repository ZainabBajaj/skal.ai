"use client";


import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, TrendingUp, Settings, Zap, CheckCircle, Target, Sparkles, Rocket, Crown, AlertCircle, Mail } from 'lucide-react';

interface QuizAnswers {
  businessSize?: string;
  timeSpent?: string;
  currentTools?: string;
  mainGoal?: string;
  industry?: string;
  aiExperience?: string;
  email?: string;
}

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'newbie' | 'ready' | 'pro' | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [emailStored, setEmailStored] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const questions = [
    {
      id: 'businessSize',
      question: "What is your business size?",
      icon: <TrendingUp className="w-6 h-6" />,
      options: [
        { value: 'solo', label: 'Solo entrepreneur (just me!)', emoji: '🚀' },
        { value: 'small', label: 'Small team (2-10 people)', emoji: '👥' },
        { value: 'medium', label: 'Growing business (11-50 people)', emoji: '🏢' },
        { value: 'large', label: 'Established company (50+ people)', emoji: '🏬' }
      ]
    },
    {
      id: 'timeSpent',
      question: "How much time does your team spend on repetitive tasks daily?",
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: 'minimal', label: 'Less than 1 hour (lucky you!)', emoji: '⚡' },
        { value: 'moderate', label: '1-3 hours (getting annoying)', emoji: '⏰' },
        { value: 'significant', label: '3-5 hours (major pain point)', emoji: '😤' },
        { value: 'excessive', label: '5+ hours (help me please!)', emoji: '😱' }
      ]
    },
    {
      id: 'currentTools',
      question: "What tools do you currently use?",
      icon: <Settings className="w-6 h-6" />,
      options: [
        { value: 'basic', label: 'Email & Google Docs (keeping it simple)', emoji: '📧' },
        { value: 'productivity', label: 'Notion, Slack, Trello (organized)', emoji: '📊' },
        { value: 'business', label: 'CRM, HubSpot, Salesforce (professional)', emoji: '💼' },
        { value: 'advanced', label: 'Custom integrations & APIs (tech-savvy)', emoji: '🔧' }
      ]
    },
    {
      id: 'mainGoal',
      question: "What is your #1 goal right now?",
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: 'time', label: 'Save time (give me my life back!)', emoji: '⏱️' },
        { value: 'sales', label: 'Increase sales (show me the money)', emoji: '💰' },
        { value: 'operations', label: 'Improve operations (run like clockwork)', emoji: '⚙️' },
        { value: 'growth', label: 'Scale the business (to the moon!)', emoji: '🚀' }
      ]
    },
    {
      id: 'industry',
      question: "What industry are you in?",
      icon: <Zap className="w-6 h-6" />,
      options: [
        { value: 'tech', label: 'Tech/SaaS (living in the future)', emoji: '💻' },
        { value: 'ecommerce', label: 'E-commerce (selling the dream)', emoji: '🛒' },
        { value: 'consulting', label: 'Consulting/Services (expertise for hire)', emoji: '🎯' },
        { value: 'other', label: 'Other industry (unique snowflake)', emoji: '✨' }
      ]
    },
    {
      id: 'aiExperience',
      question: "Do you have someone managing AI/automation yet?",
      icon: <CheckCircle className="w-6 h-6" />,
      options: [
        { value: 'none', label: 'Nope, total beginner (AI what?)', emoji: '🤔' },
        { value: 'dabbling', label: 'Experimenting on my own (DIY mode)', emoji: '🧪' },
        { value: 'some', label: 'Have some basic automations (getting there)', emoji: '🛠️' },
        { value: 'advanced', label: 'Yes, dedicated AI person/team (pros)', emoji: '🎓' }
      ]
    },
    {
      id: 'email',
      question: "What is your email to get your Quick Wins report?",
      icon: <CheckCircle className="w-6 h-6" />,
      type: 'email',
      placeholder: 'your@email.com'
    }
  ];

  const calculateResult = (answers: QuizAnswers) => {
    const scores = {
      newbie: 0,
      ready: 0,
      pro: 0
    };

    if (answers.businessSize === 'solo') scores.newbie += 2;
    else if (answers.businessSize === 'small') scores.ready += 2;
    else scores.pro += 2;

    if (answers.timeSpent === 'minimal') scores.newbie += 1;
    else if (answers.timeSpent === 'moderate') scores.ready += 2;
    else scores.pro += 2;

    if (answers.currentTools === 'basic') scores.newbie += 2;
    else if (answers.currentTools === 'productivity') scores.ready += 2;
    else scores.pro += 2;

    if (answers.aiExperience === 'none') scores.newbie += 3;
    else if (answers.aiExperience === 'dabbling') scores.ready += 2;
    else scores.pro += 2;

    const maxScore = Math.max(scores.newbie, scores.ready, scores.pro);
    
    if (scores.newbie === maxScore) return 'newbie';
    else if (scores.ready === maxScore) return 'ready';
    else return 'pro';
  };

  const resultContent = {
    newbie: {
      title: "You're an Automation Newbie! 🌱",
      subtitle: "Perfect! Everyone starts somewhere, and you're about to discover some game-changing shortcuts.",
      description: "You're sitting on a goldmine of easy automation opportunities. Let's start with simple wins that'll save you hours every week!",
      recommendations: [
        "Set up email templates and signatures",
        "Automate your social media posting",
        "Create simple chatbots for FAQs",
        "Use AI for content writing assistance"
      ],
      color: "from-green-400 to-blue-500"
    },
    ready: {
      title: "You're Ready to Scale AI! 🚀",
      subtitle: "You've got the basics down. Time to level up with some serious automation workflows!",
      description: "You're in the sweet spot to implement medium-complexity automations that'll transform how your team works.",
      recommendations: [
        "Build advanced CRM automations",
        "Set up cross-platform integrations",
        "Implement AI-powered lead scoring",
        "Create automated reporting dashboards"
      ],
      color: "from-purple-400 to-pink-500"
    },
    pro: {
      title: "You're a Pro, Let's Optimize! ⚡",
      subtitle: "Impressive! You're already ahead of the game. Let's find those hidden optimization opportunities.",
      description: "Time to fine-tune your existing systems and explore cutting-edge AI implementations for maximum efficiency.",
      recommendations: [
        "Optimize existing automation workflows",
        "Implement predictive AI analytics",
        "Build custom AI integrations",
        "Create enterprise-level automation systems"
      ],
      color: "from-orange-400 to-red-500"
    }
  };

  const handleAnswer = (questionId: keyof QuizAnswers, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      // Smooth transition to next question
      setTimeout(() => setCurrentStep(currentStep + 1), 200);
    } else {
      // Store email in Brevo list 2 when quiz is completed
      if (newAnswers.email) {
        storeEmailInBrevo(newAnswers.email, newAnswers);
      }
      
      const resultType = calculateResult(newAnswers);
      setResult(resultType);
      
      // Smoother animation sequence
      setTimeout(() => {
        setShowAnimation(true);
      }, 300);
      
      setTimeout(() => {
        setAnimationComplete(true);
        setShowResult(true);
        setShowAnimation(false);
      }, 4000); // Extended animation time
    }
  };

  const storeEmailInBrevo = async (email: string, quizAnswers: QuizAnswers) => {
    try {
      setEmailError('');
      
      // Validate email
      if (!email || !email.includes('@')) {
        setEmailError('Please enter a valid email address.');
        return;
      }

      const requestBody = {
        email: email.toLowerCase().trim(),
        listIds: [parseInt('2')], // Ensure list ID is a number
        attributes: {
          SUBSCRIPTION_DATE: new Date().toISOString(),
          SOURCE: 'Quiz Completion',
          QUIZ_RESULT: calculateResult(quizAnswers),
          BUSINESS_SIZE: quizAnswers.businessSize || '',
          TIME_SPENT: quizAnswers.timeSpent || '',
          CURRENT_TOOLS: quizAnswers.currentTools || '',
          MAIN_GOAL: quizAnswers.mainGoal || '',
          INDUSTRY: quizAnswers.industry || '',
          AI_EXPERIENCE: quizAnswers.aiExperience || ''
        }
      };

      console.log('Sending to Brevo:', requestBody); // Debug log

      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Add a small delay for smooth transition
        setTimeout(() => {
          setEmailStored(true);
          setIsAlreadyRegistered(false);
        }, 500);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Failed to store email in Brevo:', response.status, errorData);
        
        if (response.status === 400 && errorData.code === 'duplicate_parameter') {
          setIsAlreadyRegistered(true);
        } else if (response.status === 401) {
          setEmailError('API configuration error. Please contact support.');
        } else {
          setEmailError(`Failed to save email (${response.status}). Please try again.`);
        }
      }
    } catch (error) {
      console.error('Error storing email in Brevo:', error);
      setEmailError('Network error. Please check your connection.');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
    setShowAnimation(false);
    setAnimationComplete(false);
    setEmailStored(false);
    setEmailError('');
    setEmailInput('');
    setDownloadSuccess(false);
    setIsAlreadyRegistered(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canDownloadReport = (): boolean => {
    return !!(answers.email && validateEmail(answers.email) && !isAlreadyRegistered);
  };

  const downloadPDF = () => {
    // Check if user has entered a valid email
    const userEmail = answers.email;
    
    if (!userEmail || !validateEmail(userEmail)) {
      setEmailError('Please enter a valid email address to download your report.');
      return;
    }

    // Check if user is already registered
    if (isAlreadyRegistered) {
      return;
    }
    
    const pdfType = result === 'newbie' ? 'easy' : result === 'ready' ? 'medium' : 'advanced';
    const pdfUrl = `/pdf/${pdfType}.pdf`;
    const filename = `AI-Automation-Report-${result === 'newbie' ? 'Easy' : result === 'ready' ? 'Medium' : 'Advanced'}.pdf`;
    
    console.log('Downloading PDF:', pdfUrl);
    console.log('User email:', userEmail);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      console.log('PDF download initiated successfully');
      setEmailError(''); // Clear any previous errors
      setDownloadSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      setEmailError('Download failed. Please try again.');
      // Fallback: open in new tab
      window.open(pdfUrl, '_blank');
    }
  };

  const ResultAnimation = ({ type }: { type: 'newbie' | 'ready' | 'pro' }) => {
    if (!showAnimation) return null;

    const animations: Record<'newbie' | 'ready' | 'pro', JSX.Element> = {
      newbie: (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Sophisticated background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-blue-900/20"></div>
          
          {/* Elegant particle system */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <div className={`w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-green-400' : i % 3 === 1 ? 'bg-emerald-300' : 'bg-blue-400'
              }`}></div>
            </div>
          ))}
          
          {/* Modern geometric patterns */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`pattern-${i}`}
              className="absolute opacity-20"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '8s',
                animation: 'rotate 8s linear infinite'
              }}
            >
              <div className="w-8 h-8 border border-green-400/30 rounded-lg transform rotate-45"></div>
            </div>
          ))}
          
          {/* Main result display with modern design */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div 
              className="bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-xl text-white px-12 py-8 rounded-2xl shadow-2xl border border-green-400/30"
              style={{
                animation: 'slideIn 1s ease-out'
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Automation Newbie</div>
                <div className="text-lg opacity-90">Ready to begin your AI journey</div>
              </div>
            </div>
          </div>
          
          {/* Subtle progress indicators */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`progress-${i}`}
              className="absolute bottom-20 opacity-60"
              style={{
                left: `${15 + i * 12}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s',
                animation: 'fadeInUp 2s ease-out'
              }}
            >
              <div className="w-2 h-8 bg-gradient-to-t from-green-400 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>
      ),
      
      ready: (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Sophisticated background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-indigo-900/20"></div>
          
          {/* Elegant data flow visualization */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animation: 'dataFlow 5s ease-in-out infinite'
              }}
            >
              <div className={`w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-indigo-400'
              }`}></div>
            </div>
          ))}
          
          {/* Modern network connections */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`connection-${i}`}
              className="absolute opacity-30"
              style={{
                left: `${20 + i * 6}%`,
                top: `${30 + i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '6s',
                animation: 'pulse 6s ease-in-out infinite'
              }}
            >
              <div className="w-6 h-6 border border-purple-400/40 rounded-full"></div>
            </div>
          ))}
          
          {/* Main result display with modern design */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div 
              className="bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-xl text-white px-12 py-8 rounded-2xl shadow-2xl border border-purple-400/30"
              style={{
                animation: 'slideIn 1s ease-out'
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">AI Ready</div>
                <div className="text-lg opacity-90">Time to scale your automation</div>
              </div>
            </div>
          </div>
          
          {/* Progress bars showing scaling */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`progress-${i}`}
              className="absolute bottom-16 opacity-60"
              style={{
                left: `${10 + i * 10}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '2.5s',
                animation: 'scaleUp 2.5s ease-out'
              }}
            >
              <div className="w-3 h-12 bg-gradient-to-t from-purple-400 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>
      ),
      
      pro: (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Sophisticated background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900/20 to-yellow-900/20"></div>
          
          {/* Elegant neural network visualization */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                animation: 'neuralFlow 7s ease-in-out infinite'
              }}
            >
              <div className={`w-1 h-1 rounded-full ${
                i % 4 === 0 ? 'bg-yellow-400' : i % 4 === 1 ? 'bg-orange-400' : i % 4 === 2 ? 'bg-red-400' : 'bg-amber-300'
              }`}></div>
            </div>
          ))}
          
          {/* Advanced geometric patterns */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`pattern-${i}`}
              className="absolute opacity-25"
              style={{
                left: `${5 + i * 6}%`,
                top: `${15 + i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '10s',
                animation: 'complexRotate 10s linear infinite'
              }}
            >
              <div className="w-10 h-10 border border-yellow-400/40 rounded-lg transform rotate-45"></div>
            </div>
          ))}
          
          {/* Main result display with modern design */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div 
              className="bg-gradient-to-r from-orange-600/90 to-yellow-600/90 backdrop-blur-xl text-white px-12 py-8 rounded-2xl shadow-2xl border border-yellow-400/30"
              style={{
                animation: 'slideIn 1s ease-out'
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">AI Master</div>
                <div className="text-lg opacity-90">Ready for advanced optimization</div>
              </div>
            </div>
          </div>
          
          {/* Performance metrics visualization */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`metric-${i}`}
              className="absolute bottom-12 opacity-70"
              style={{
                left: `${8 + i * 8}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s',
                animation: 'optimizeUp 3s ease-out'
              }}
            >
              <div className="w-4 h-16 bg-gradient-to-t from-yellow-400 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>
      )
    };

    return animations[type];
  };

  if (showAnimation && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative">
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
        <ResultAnimation type={result} />
      </div>
    );
  }

  if (showResult && result && animationComplete) {
    const resultData = resultContent[result as keyof typeof resultContent];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative">
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>

        <div className="max-w-4xl w-full relative z-10">
          <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform animate-pulse" 
            style={{ 
              animationDuration: '2s', 
              animationIterationCount: '1',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            <div className={`bg-gradient-to-r ${resultData.color} p-8 text-white text-center relative overflow-hidden`}>
              <div className="absolute top-4 right-4">
                {result === 'newbie' && <Sparkles className="w-8 h-8 animate-spin" />}
                {result === 'ready' && <Rocket className="w-8 h-8 animate-bounce" />}
                {result === 'pro' && <Crown className="w-8 h-8 animate-pulse" />}
              </div>
              
              <h1 className="text-4xl font-bold mb-4 animate-bounce" style={{ animationDuration: '1s', animationIterationCount: '2' }}>
                {resultData.title}
              </h1>
              <p className="text-xl opacity-90">{resultData.subtitle}</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg mb-8 text-center font-medium" style={{ color: '#000000' }}>{resultData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: '#000000' }}>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Your Top AI Opportunities:
                  </h3>
                  <ul className="space-y-2">
                    {resultData.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="font-semibold text-base" style={{ color: '#000000' }}>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center" style={{ color: '#000000' }}>
                    <Zap className="w-5 h-5 text-blue-500 mr-2" />
                    What&apos;s Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="font-semibold" style={{ color: '#000000' }}>Get your Free &quot;10-Minute AI Planner&quot;</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="font-semibold" style={{ color: '#000000' }}>Bonus: AI Prompt Pack included!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                {emailStored && (
                  <div 
                    className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 animate-fade-in"
                    style={{
                      animation: 'fadeIn 0.6s ease-in-out'
                    }}
                  >
                    <div className="flex items-center justify-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2 animate-bounce" style={{ animationDuration: '1s' }} />
                      <span className="font-medium">Your email has been saved! We&apos;ll send your AI Quick Wins report shortly.</span>
                    </div>
                  </div>
                )}
                
                {emailError && (
                  <div 
                    className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 animate-fade-in"
                    style={{
                      animation: 'fadeIn 0.6s ease-in-out'
                    }}
                  >
                    <div className="flex items-center justify-center text-red-700">
                      <AlertCircle className="w-5 h-5 mr-2 animate-pulse" style={{ animationDuration: '1s' }} />
                      <span className="font-medium">{emailError}</span>
                    </div>
                  </div>
                )}

                {!answers.email && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-center text-blue-700">
                      <Mail className="w-5 h-5 mr-2" />
                      <span className="font-medium">Please enter your email above to download your personalized report</span>
                    </div>
                  </div>
                )}

                {downloadSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 animate-fade-in">
                    <div className="flex items-center justify-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2 animate-bounce" style={{ animationDuration: '1s' }} />
                      <span className="font-medium">Report download started! Check your downloads folder.</span>
                    </div>
                  </div>
                )}

                {isAlreadyRegistered && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4 animate-fade-in">
                    <div className="flex items-center justify-center text-orange-700">
                      <AlertCircle className="w-5 h-5 mr-2 animate-pulse" style={{ animationDuration: '1s' }} />
                      <span className="font-medium">This email is already registered. Please use a different email address to download your report.</span>
                    </div>
                  </div>
                )}
                
                <button
                  onClick={downloadPDF}
                  disabled={!canDownloadReport()}
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 cursor-pointer ${
                    !canDownloadReport()
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg transform hover:scale-105 animate-pulse'
                  }`}
                  style={{ animationDuration: '2s' }}
                >
                  {!answers.email || !validateEmail(answers.email)
                    ? '⚠️ Enter Email to Download Report'
                    : isAlreadyRegistered
                    ? '❌ Email Already Registered'
                    : '📄 Download Your Report'
                  }
                </button>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <Link 
                    href="/" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1 group"
                  >
                    🏠 Click here to go back to homepage 
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <button 
                  onClick={resetQuiz}
                  className="text-gray-500 hover:text-gray-700 underline text-sm"
                >
                  Take quiz again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {currentStep === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              What&apos;s Your AI Quick Wins Score? 🤖
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Discover how AI can save you time & money in 5 minutes
            </p>
            <p className="text-lg text-gray-400">
              Take this free quiz and instantly get your top 3 automation opportunities
            </p>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gray-200 h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-700 ease-in-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white mr-4">
                  {questions[currentStep]?.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                                      {questions[currentStep]?.question}
                </h2>
              </div>

              {questions[currentStep].type === 'email' ? (
                <div className="max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={emailInput}
                      placeholder={questions[currentStep].placeholder}
                      className="flex-1 p-4 border-2 border-gray-300 rounded-xl text-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && emailInput) {
                          handleAnswer(questions[currentStep].id as keyof QuizAnswers, emailInput);
                        }
                      }}
                      onChange={(e) => {
                        setEmailInput(e.target.value);
                        // Clear already registered state when user changes email
                        if (isAlreadyRegistered) {
                          setIsAlreadyRegistered(false);
                          setEmailError('');
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        if (emailInput) {
                          handleAnswer(questions[currentStep].id as keyof QuizAnswers, emailInput);
                        }
                      }}
                      disabled={!emailInput}
                      className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  {questions[currentStep]?.options?.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentStep].id as keyof QuizAnswers, option.value)}
                      className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group transform hover:scale-[1.02] animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animation: 'fadeIn 0.6s ease-in-out',
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{option.emoji}</span>
                        <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
                          {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-500 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400">
          <p>✨ This will only take 2 minutes - your future self will thank you!</p>
        </div>
      </div>
      

    </div>
  );
};

export default QuizPage; 
