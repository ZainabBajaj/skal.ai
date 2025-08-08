"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

interface QuizAnswers {
  businessType: string;
  teamSize: string;
  automationGoals: string;
  currentTools: string;
  budget: string;
  email: string;
}

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    businessType: '',
    teamSize: '',
    automationGoals: '',
    currentTools: '',
    budget: '',
    email: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [emailStored, setEmailStored] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, left: string, top: string, delay: string, duration: string}>>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [userLevel, setUserLevel] = useState('');

  // Generate particles on client-side only
  useEffect(() => {
    const generateParticles = () => {
      const particleData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 2}s`
      }));
      setParticles(particleData);
    };

    generateParticles();
  }, []);

  const questions = [
    {
      id: 'businessType',
      question: 'What type of business do you run?',
      icon: '🏢',
      options: [
        { value: 'startup', label: 'Startup (0-10 employees)', emoji: '🚀' },
        { value: 'small', label: 'Small Business (11-50 employees)', emoji: '💼' },
        { value: 'medium', label: 'Medium Business (51-200 employees)', emoji: '🏢' },
        { value: 'enterprise', label: 'Enterprise (200+ employees)', emoji: '🏭' }
      ]
    },
    {
      id: 'teamSize',
      question: 'How many people are on your team?',
      icon: '👥',
      options: [
        { value: '1-5', label: '1-5 people', emoji: '👤' },
        { value: '6-10', label: '6-10 people', emoji: '👥' },
        { value: '11-25', label: '11-25 people', emoji: '👨‍👩‍👧‍👦' },
        { value: '25+', label: '25+ people', emoji: '🏢' }
      ]
    },
    {
      id: 'automationGoals',
      question: 'What are your main automation goals?',
      icon: '🎯',
      options: [
        { value: 'time', label: 'Save time on repetitive tasks', emoji: '⏰' },
        { value: 'cost', label: 'Reduce operational costs', emoji: '💰' },
        { value: 'accuracy', label: 'Improve accuracy & quality', emoji: '🎯' },
        { value: 'scaling', label: 'Scale operations efficiently', emoji: '📈' }
      ]
    },
    {
      id: 'currentTools',
      question: 'What tools do you currently use?',
      icon: '🛠️',
      options: [
        { value: 'basic', label: 'Basic tools (Excel, Google Sheets)', emoji: '📊' },
        { value: 'crm', label: 'CRM & project management tools', emoji: '📋' },
        { value: 'automation', label: 'Some automation tools', emoji: '⚙️' },
        { value: 'advanced', label: 'Advanced AI/ML tools', emoji: '🤖' }
      ]
    },
    {
      id: 'budget',
      question: 'What&apos;s your monthly automation budget?',
      icon: '💰',
      options: [
        { value: '0-500', label: '$0 - $500', emoji: '💵' },
        { value: '500-2000', label: '$500 - $2,000', emoji: '💸' },
        { value: '2000-5000', label: '$2,000 - $5,000', emoji: '🏦' },
        { value: '5000+', label: '$5,000+', emoji: '💰' }
      ]
    },
    {
      id: 'email',
      question: 'Where should we send your personalized AI report?',
      icon: '📧',
      type: 'email',
      placeholder: 'Enter your email address'
    }
  ];

  const handleAnswer = async (questionId: keyof QuizAnswers, value: string) => {
    if (questionId === 'email') {
      setIsValidatingEmail(true);
      setEmailValidationError('');

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailValidationError('Please enter a valid email address');
        setIsValidatingEmail(false);
        return;
      }

      try {
        // Debug: Check environment variables
        console.log('API Key exists:', !!process.env.NEXT_PUBLIC_BREVO_API_KEY);
        console.log('Email being submitted:', value);

        const requestBody = {
          email: value.toLowerCase().trim(),
          listIds: [2], // Using list ID 2 for quiz
          attributes: {
            SUBSCRIPTION_DATE: new Date().toISOString(),
            SOURCE: 'Quiz Registration'
          }
        };

        console.log('Request body:', requestBody);

        const response = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
          },
          body: JSON.stringify(requestBody),
        });

        console.log('Response status:', response.status);

        if (response.ok) {
          const responseData = await response.json();
          console.log('Success response:', responseData);
          setEmailStored(true);
          
          // Show loading animation with personalized message
          const level = getUserLevel();
          setUserLevel(level);
          
          let message = '';
          switch (level) {
            case 'newbie':
              message = "You're an Automation Newbie";
              break;
            case 'medium':
              message = "You're Ready to Scale AI";
              break;
            case 'advanced':
              message = "You're a Pro, Let's Optimize";
              break;
            default:
              message = "Analyzing your results...";
          }
          
          setLoadingMessage(message);
          setShowLoading(true);
          
          // Simulate processing time and then show results
          setTimeout(() => {
            setShowLoading(false);
            proceedToResults();
          }, 3000);
        } else {
          const errorData = await response.json();
          console.log('Error response:', errorData);
          
          if (response.status === 400) {
            if (errorData.code === 'duplicate_parameter') {
              setEmailValidationError('This email is already registered. Please use a different email or contact support.');
            } else {
              setEmailValidationError(`Invalid request: ${errorData.message || 'Please check your email and try again.'}`);
            }
          } else if (response.status === 401) {
            setEmailValidationError('API key is invalid. Please check your Brevo configuration.');
          } else if (response.status === 404) {
            setEmailValidationError('List ID not found. Please check your Brevo list configuration.');
          } else {
            setEmailValidationError(`Server error (${response.status}): ${errorData.message || 'Please try again later.'}`);
          }
        }
      } catch (error) {
        console.error('Quiz email registration error:', error);
        setEmailValidationError('Network error. Please check your connection and try again.');
      } finally {
        setIsValidatingEmail(false);
      }
      return;
    }

    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      proceedToResults();
    }
  };

  const proceedToResults = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({
      businessType: '',
      teamSize: '',
      automationGoals: '',
      currentTools: '',
      budget: '',
      email: ''
    });
    setShowResults(false);
    setEmailInput('');
    setEmailValidationError('');
    setIsValidatingEmail(false);
    setEmailStored(false);
    setShowLoading(false);
    setLoadingMessage('');
    setUserLevel('');
  };

  const downloadPDF = () => {
    // Determine which PDF to download based on answers
    let pdfName = 'easy.pdf'; // default
    
    if (answers.businessType === 'enterprise' || answers.budget === '5000+') {
      pdfName = 'advanced.pdf';
    } else if (answers.businessType === 'medium' || answers.budget === '2000-5000') {
      pdfName = 'medium.pdf';
    }
    
    const link = document.createElement('a');
    link.href = `/pdf/${pdfName}`;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to determine user level and get personalized results
  const getUserLevel = () => {
    // Determine user level based on answers
    let score = 0;
    
    // Business type scoring
    if (answers.businessType === 'startup') score += 1;
    else if (answers.businessType === 'small') score += 2;
    else if (answers.businessType === 'medium') score += 3;
    else if (answers.businessType === 'enterprise') score += 4;
    
    // Team size scoring
    if (answers.teamSize === '1-5') score += 1;
    else if (answers.teamSize === '6-10') score += 2;
    else if (answers.teamSize === '11-25') score += 3;
    else if (answers.teamSize === '25+') score += 4;
    
    // Current tools scoring
    if (answers.currentTools === 'basic') score += 1;
    else if (answers.currentTools === 'crm') score += 2;
    else if (answers.currentTools === 'automation') score += 3;
    else if (answers.currentTools === 'advanced') score += 4;
    
    // Budget scoring
    if (answers.budget === '0-500') score += 1;
    else if (answers.budget === '500-2000') score += 2;
    else if (answers.budget === '2000-5000') score += 3;
    else if (answers.budget === '5000+') score += 4;
    
    // Determine level based on total score
    if (score <= 8) return 'newbie';
    else if (score <= 12) return 'medium';
    else return 'advanced';
  };

  const getPersonalizedResults = () => {
    const userLevel = getUserLevel();
    
    switch (userLevel) {
      case 'newbie':
        return {
          timeSavings: {
            icon: '⚡',
            title: 'Time Savings',
            description: 'Save 5-8 hours per week with basic automation',
            gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
            border: 'border-blue-200/50 dark:border-blue-700/50'
          },
          costReduction: {
            icon: '💰',
            title: 'Cost Reduction',
            description: 'Reduce costs by 20-30% with simple tools',
            gradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
            border: 'border-green-200/50 dark:border-green-700/50'
          },
          efficiencyBoost: {
            icon: '📈',
            title: 'Efficiency Boost',
            description: '2x faster task completion with AI assistance',
            gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
            border: 'border-purple-200/50 dark:border-purple-700/50'
          }
        };
      case 'medium':
        return {
          timeSavings: {
            icon: '⚡',
            title: 'Time Savings',
            description: 'Save 10-15 hours per week with advanced automation',
            gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
            border: 'border-blue-200/50 dark:border-blue-700/50'
          },
          costReduction: {
            icon: '💰',
            title: 'Cost Reduction',
            description: 'Reduce costs by 30-40% with integrated solutions',
            gradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
            border: 'border-green-200/50 dark:border-green-700/50'
          },
          efficiencyBoost: {
            icon: '📈',
            title: 'Efficiency Boost',
            description: '3x faster task completion with AI workflows',
            gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
            border: 'border-purple-200/50 dark:border-purple-700/50'
          }
        };
      case 'advanced':
        return {
          timeSavings: {
            icon: '⚡',
            title: 'Time Savings',
            description: 'Save 20+ hours per week with enterprise AI',
            gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
            border: 'border-blue-200/50 dark:border-blue-700/50'
          },
          costReduction: {
            icon: '💰',
            title: 'Cost Reduction',
            description: 'Reduce costs by 40-60% with AI transformation',
            gradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
            border: 'border-green-200/50 dark:border-green-700/50'
          },
          efficiencyBoost: {
            icon: '📈',
            title: 'Efficiency Boost',
            description: '5x faster task completion with AI automation',
            gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
            border: 'border-purple-200/50 dark:border-purple-700/50'
          }
        };
      default:
        return {
          timeSavings: {
            icon: '⚡',
            title: 'Time Savings',
            description: 'Save 5-8 hours per week with basic automation',
            gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
            border: 'border-blue-200/50 dark:border-blue-700/50'
          },
          costReduction: {
            icon: '💰',
            title: 'Cost Reduction',
            description: 'Reduce costs by 20-30% with simple tools',
            gradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
            border: 'border-green-200/50 dark:border-green-700/50'
          },
          efficiencyBoost: {
            icon: '📈',
            title: 'Efficiency Boost',
            description: '2x faster task completion with AI assistance',
            gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
            border: 'border-purple-200/50 dark:border-purple-700/50'
          }
        };
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-blue-400/30 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />

        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 quiz-wave" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='%23009bd7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            animation: 'wave 10s linear infinite'
          }}></div>
        </div>

        {/* Glowing Dots */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-400/30 rounded-full blur-sm animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-purple-400/40 rounded-full blur-sm animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-cyan-400/35 rounded-full blur-sm animate-ping" style={{ animationDelay: '6s' }} />

        {/* Main Content */}
        <div className="max-w-4xl w-full relative z-10">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 animate-fade-in">
            <div className="p-8 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <span className="text-3xl">🎉</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Your AI Quick Wins Report is Ready!
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Based on your answers, we&apos;ve prepared a personalized report with your top 3 automation opportunities.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {(() => {
                  const results = getPersonalizedResults();
                  return (
                    <>
                      <div className={`bg-gradient-to-br ${results.timeSavings.gradient} p-6 rounded-2xl border ${results.timeSavings.border}`}>
                        <div className="text-3xl mb-3">{results.timeSavings.icon}</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{results.timeSavings.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{results.timeSavings.description}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${results.costReduction.gradient} p-6 rounded-2xl border ${results.costReduction.border}`}>
                        <div className="text-3xl mb-3">{results.costReduction.icon}</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{results.costReduction.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{results.costReduction.description}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${results.efficiencyBoost.gradient} p-6 rounded-2xl border ${results.efficiencyBoost.border}`}>
                        <div className="text-3xl mb-3">{results.efficiencyBoost.icon}</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{results.efficiencyBoost.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{results.efficiencyBoost.description}</p>
                      </div>
                    </>
                  );
                })()}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={downloadPDF}
                  disabled={!emailStored}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>📄</span>
                  Download Your Report
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
                >
                  Take Quiz Again
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>🏠</span>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Theme Toggle Button */}
        <FloatingThemeToggle />

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(100px); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  // Loading Screen
  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-blue-400/30 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />

        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 quiz-wave" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='%23009bd7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            animation: 'wave 10s linear infinite'
          }}></div>
        </div>

        {/* Glowing Dots */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-400/30 rounded-full blur-sm animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-purple-400/40 rounded-full blur-sm animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-cyan-400/35 rounded-full blur-sm animate-ping" style={{ animationDelay: '6s' }} />

        {/* Main Content */}
        <div className="max-w-2xl w-full relative z-10">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 animate-fade-in">
            <div className="p-12 text-center">
              {/* Loading Animation */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                {/* Personalized Message */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
                  {loadingMessage}
                </h1>
                
                {/* Subtitle based on user level */}
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  {userLevel === 'newbie' && "Let's find you some easy wins to get started!"}
                  {userLevel === 'medium' && "Ready to scale your operations with AI workflows!"}
                  {userLevel === 'advanced' && "Time to optimize and maximize your AI potential!"}
                </p>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
                
                {/* Status Text */}
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                  Analyzing your responses and generating personalized recommendations...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Theme Toggle Button */}
        <FloatingThemeToggle />

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(100px); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-blue-400/30 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 quiz-wave" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='%23009bd7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'wave 10s linear infinite'
        }}></div>
      </div>

      {/* Glowing Dots */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-400/30 rounded-full blur-sm animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-purple-400/40 rounded-full blur-sm animate-ping" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-cyan-400/35 rounded-full blur-sm animate-ping" style={{ animationDelay: '6s' }} />

      {/* Main Content */}
      <div className="max-w-4xl w-full relative z-10">
        {currentStep === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              What&apos;s Your AI Quick Wins Score? 🤖
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Take this free quiz and instantly get your top 3 automation opportunities
            </p>
          </div>
        )}

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {/* Progress bar */}
          <div className="relative h-2 bg-gray-200 dark:bg-gray-700">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-700 ease-in-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white mr-4 animate-pulse">
                  {questions[currentStep]?.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
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
                      className={`flex-1 p-4 border-2 rounded-xl text-lg text-gray-900 placeholder-gray-500 focus:outline-none transition-colors bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${
                        emailValidationError 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-blue-500 dark:border-gray-600'
                      }`}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && emailInput && !isValidatingEmail) {
                          handleAnswer(questions[currentStep].id as keyof QuizAnswers, emailInput);
                        }
                      }}
                      onChange={(e) => {
                        setEmailInput(e.target.value);
                        // Clear validation error when user types
                        if (emailValidationError) {
                          setEmailValidationError('');
                        }
                      }}
                      disabled={isValidatingEmail}
                    />
                    <button
                      onClick={() => {
                        if (emailInput && !isValidatingEmail) {
                          handleAnswer(questions[currentStep].id as keyof QuizAnswers, emailInput);
                        }
                      }}
                      disabled={!emailInput || isValidatingEmail}
                      className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                    >
                      {isValidatingEmail ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Validating...
                        </div>
                      ) : (
                        'Send'
                      )}
                    </button>
                  </div>
                  
                  {/* Inline error message */}
                  {emailValidationError && (
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
                      <div className="flex items-center text-red-700 dark:text-red-400">
                        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{emailValidationError}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid gap-4">
                  {questions[currentStep]?.options?.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentStep].id as keyof QuizAnswers, option.value)}
                      className="text-left p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group transform hover:scale-[1.02] animate-fade-in hover:shadow-lg"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animation: 'fadeIn 0.6s ease-in-out',
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{option.emoji}</span>
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-auto group-hover:text-blue-500 transition-colors group-hover:translate-x-1" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400 dark:text-gray-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p>✨ This will only take 2 minutes - your future self will thank you!</p>
        </div>
      </div>
      
      {/* Theme Toggle Button */}
      <FloatingThemeToggle />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuizPage; 
