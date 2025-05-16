'use client';

import { useCart, CartItem } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function Cart() {
  const { items, removeItem, clearCart, isOpen, toggleCart, closeCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleHireNow = () => {
    // Create message for contact form
    if (items.length > 0) {
      let message = "Hi,\nI'm looking to hire the following professionals for my project:\n\n";
      
      // Group items for display
      const groupedItems = groupSimilarItems(items);
      
      // Add each group to the message
      Object.values(groupedItems).forEach((group) => {
        if (group.count === 1) {
          message += `- ${group.item.role} (${group.item.experience}) - ${getPriceTypeDisplay(group.item.priceType)} $${group.item.price}\n`;
        } else {
          message += `- ${group.count}x ${group.item.role} (${group.item.experience}) - ${getPriceTypeDisplay(group.item.priceType)} $${group.item.price}\n`;
        }
      });

      message += "\nLet's get in touch and discuss the details.\nBest regards";
      
      // Create subject line based on number of roles
      const roleCount = Object.keys(groupedItems).length;
      const subject = roleCount === 1 
        ? `Hiring Request for ${Object.values(groupedItems)[0].item.role}` 
        : `Hiring Request for ${roleCount} Developers`;
      
      // Set message and subject in sessionStorage for contact form
      sessionStorage.setItem('contactMessage', message);
      sessionStorage.setItem('contactSubject', subject);
      
      // Dispatch custom event to notify page component
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('sessionStorageUpdated'));
      }
      
      // Scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Close cart
        closeCart();
      }
    }
  };

  // Helper function to group similar items
  const groupSimilarItems = (cartItems: CartItem[]) => {
    const groups: Record<string, { item: CartItem, count: number }> = {};
    
    cartItems.forEach(item => {
      // Create a key that identifies similar items (ignoring the unique ID)
      const key = `${item.role}-${item.experience}-${item.priceType}`;
      
      if (groups[key]) {
        groups[key].count += 1;
      } else {
        groups[key] = { item, count: 1 };
      }
    });
    
    return groups;
  };

  const getPriceTypeDisplay = (priceType: string) => {
    switch(priceType) {
      case 'fullTime': return 'Full Time';
      case 'hourly': return 'Hourly';
      case 'partTime': return 'Part Time';
      default: return priceType;
    }
  };

  const totalItems = items.length;

  if (!isClient) return null;

  return (
    <div className="fixed bottom-4 left-4 sm:left-auto sm:right-4 z-50">
      {!isOpen ? (
        <button 
          onClick={toggleCart}
          className="bg-[#009bd7] text-white p-3 rounded-full shadow-lg hover:bg-[#00E1FF] transition-colors relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-[90vw] sm:w-80 max-h-[70vh] flex flex-col">
          <div className="bg-[#009bd7] text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Your Selection</h3>
            <button onClick={toggleCart} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto flex-grow">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your selection is empty</p>
            ) : (
              <ul className="space-y-3">
                {Object.values(groupSimilarItems(items)).map((group) => (
                  <li key={group.item.id} className="bg-gray-50 p-3 rounded border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {group.count > 1 && <span className="bg-[#009bd7] text-white text-xs rounded-full px-2 py-0.5 mr-1">{group.count}x</span>}
                          {group.item.role}
                        </h4>
                        <p className="text-sm text-gray-600">{group.item.experience}</p>
                        <p className="text-sm font-medium text-[#009bd7]">
                          {getPriceTypeDisplay(group.item.priceType)}: ${group.item.price}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {group.count > 1 && (
                          <span className="text-gray-500 text-xs flex items-center">
                            × {group.count}
                          </span>
                        )}
                        <button 
                          onClick={() => removeItem(group.item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="p-4 border-t">
            {items.length > 0 && (
              <div className="space-y-2">
                <button 
                  onClick={clearCart}
                  className="text-gray-600 text-sm hover:text-red-500 w-full text-left"
                >
                  Clear Selection
                </button>
                <button
                  onClick={handleHireNow}
                  className="w-full py-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg transition-all duration-200 hover:from-[#008bc1] hover:to-[#00c7e3]"
                >
                  Hire Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 