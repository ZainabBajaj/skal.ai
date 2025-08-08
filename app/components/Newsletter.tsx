"use client";

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsLoading(true);
    setError('');

    // Debug: Check environment variables
    console.log('API Key exists:', !!process.env.NEXT_PUBLIC_BREVO_API_KEY);
    console.log('List ID:', process.env.NEXT_PUBLIC_BREVO_LIST_ID);
    console.log('Email being submitted:', email);

    try {
      const requestBody = {
        email: email.toLowerCase().trim(),
        listIds: [3], // Using list ID 3 for newsletter
        attributes: {
          SUBSCRIPTION_DATE: new Date().toISOString(),
          SOURCE: 'Website Newsletter'
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
        setIsSubscribed(true);
        setEmail('');
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData);
        
        if (response.status === 400) {
        if (errorData.code === 'duplicate_parameter') {
          setError('This email is already subscribed to our newsletter!');
          } else {
            setError(`Invalid request: ${errorData.message || 'Please check your email and try again.'}`);
          }
        } else if (response.status === 401) {
          setError('API key is invalid. Please check your Brevo configuration.');
        } else if (response.status === 404) {
          setError('List ID not found. Please check your Brevo list configuration.');
        } else {
          setError(`Server error (${response.status}): ${errorData.message || 'Please try again later.'}`);
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="text-center">
  
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
        Join the growing community receiving Skal Insights.
      </p>
      
        {isSubscribed ? (
          <div className="text-center">
          <p className="text-green-600 dark:text-green-400 text-sm font-medium">
            Thank you for subscribing!
          </p>
            </div>
        ) : (
        <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Email address"
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  disabled={isLoading}
                  />
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
            className="px-4 py-2 text-sm bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
      )}

      {error && (
        <p className="text-red-600 dark:text-red-400 text-xs mt-2">
          {error}
            </p>
        )}
    </div>
  );
};

export default NewsletterSection;
