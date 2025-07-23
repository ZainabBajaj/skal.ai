"use client";

import { useState, useEffect } from 'react';
import { Mail, CheckCircle, ArrowRight, X, AlertCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          listIds: [parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || '1')],
          attributes: {
            SUBSCRIPTION_DATE: new Date().toISOString(),
            SOURCE: 'Website Newsletter'
          }
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else if (response.status === 400) {
        const errorData = await response.json();
        if (errorData.code === 'duplicate_parameter') {
          setError('This email is already subscribed to our newsletter!');
        } else {
          setError('Invalid email address. Please check and try again.');
        }
      } else if (response.status === 401) {
        setError('Configuration error. Please contact support.');
      } else {
        setError('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubscribed(false);
    setEmail('');
    setError('');
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-[#009bd7]/10 p-8 sm:p-12">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Subscribed View */}
        {isSubscribed ? (
          <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                Successfully Subscribed!
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Welcome to our AI community! You'll receive cutting-edge insights and automation tips directly in your inbox.
              </p>
              <button 
                onClick={resetForm}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Subscribe Another Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
        ) : (
          <div className="text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Keep up with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">
                  AI automation trends
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the <strong>weekly newsletter</strong> keeping +20,000 businesses in the loop with the latest AI automation insights.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-700">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Email Form */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#009bd7] focus:outline-none text-gray-800 font-medium transition-colors"
                  disabled={isLoading}
                  />
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className="px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Joining...
                    </div>
                  ) : (
                    'Join free'
                  )}
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Unsubscribe any time, no hard feelings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSection;
