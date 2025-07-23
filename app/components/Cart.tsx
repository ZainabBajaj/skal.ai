// 'use client';

// import { useCart, CartItem } from '../context/CartContext';
// import { useEffect, useState } from 'react';

// export default function Cart() {
//   const { items, removeItem, clearCart, isOpen, toggleCart, closeCart } = useCart();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleHireNow = () => {
//     // Safe check for window and items
//     if (typeof window === 'undefined' || items.length === 0) return;
    
//     try {
//       // Create message for contact form
//       let message = "Hi,\nI'm looking to hire the following professionals for my project:\n\n";
      
//       // Group items for display
//       const groupedItems = groupSimilarItems(items);
      
//       // Add each group to the message
//       Object.values(groupedItems).forEach((group) => {
//         if (group.count === 1) {
//           message += `- ${group.item.role} (${group.item.experience}) - ${getPriceTypeDisplay(group.item.priceType)} $${group.item.price}\n`;
//         } else {
//           message += `- ${group.count}x ${group.item.role} (${group.item.experience}) - ${getPriceTypeDisplay(group.item.priceType)} $${group.item.price}\n`;
//         }
//       });

//       message += "\nLet's get in touch and discuss the details.\nBest regards";
      
//       // Create subject line based on number of roles
//       const roleCount = Object.keys(groupedItems).length;
//       const subject = roleCount === 1 
//         ? `Hiring Request for ${Object.values(groupedItems)[0].item.role}` 
//         : `Hiring Request for ${roleCount} Developers`;
      
//       // Set message and subject in sessionStorage for contact form
//       sessionStorage.setItem('contactMessage', message);
//       sessionStorage.setItem('contactSubject', subject);
      
//       // Dispatch custom event to notify page component
//       window.dispatchEvent(new Event('sessionStorageUpdated'));
      
//       // Scroll to contact section
//       const contactSection = document.getElementById('contact');
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//         // Close cart
//         closeCart();
//       }
//     } catch (error) {
//       console.error('Error in handleHireNow:', error);
//     }
//   };

//   // Helper function to group similar items
//   const groupSimilarItems = (cartItems: CartItem[]): Record<string, { item: CartItem, count: number, ids: string[] }> => {
//     const groups: Record<string, { item: CartItem, count: number, ids: string[] }> = {};
    
//     cartItems.forEach(item => {
//       // Create a key that identifies similar items (ignoring the unique ID)
//       const key = `${item.role}-${item.experience}-${item.priceType}`;
      
//       if (groups[key]) {
//         groups[key].count += 1;
//         groups[key].ids.push(item.id);
//       } else {
//         groups[key] = { 
//           item, 
//           count: 1,
//           ids: [item.id]
//         };
//       }
//     });
    
//     return groups;
//   };

//   const getPriceTypeDisplay = (priceType: string): string => {
//     switch(priceType) {
//       case 'fullTime': return 'Full Time';
//       case 'hourly': return 'Hourly';
//       case 'partTime': return 'Part Time';
//       default: return priceType;
//     }
//   };
  
//   // Handle removing all instances of a grouped item
//   const handleRemoveGroup = (ids: string[]): void => {
//     ids.forEach(id => removeItem(id));
//   };

//   const totalItems = items.length;

//   if (!isClient) return null;

//   return (
//     <div className="fixed bottom-4 left-4 sm:left-auto sm:right-4 z-50">
//       {!isOpen ? (
//         <button 
//           onClick={toggleCart}
//           className="bg-[#009bd7] text-white p-3 rounded-full shadow-lg hover:bg-[#00E1FF] transition-colors relative"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//               {totalItems}
//             </span>
//           )}
//         </button>
//       ) : (
//         <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-[90vw] sm:w-80 max-h-[70vh] flex flex-col">
//           <div className="bg-[#009bd7] text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
//             <h3 className="font-semibold">Your Selection</h3>
//             <button onClick={toggleCart} className="text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="p-4 overflow-y-auto flex-grow">
//             {items.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">Your selection is empty</p>
//             ) : (
//               <ul className="space-y-3">
//                 {Object.values(groupSimilarItems(items)).map((group) => (
//                   <li key={`group-${group.item.id}`} className="bg-gray-50 p-3 rounded border border-gray-200">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h4 className="font-medium text-gray-800">
//                           {group.count > 1 && <span className="bg-[#009bd7] text-white text-xs rounded-full px-2 py-0.5 mr-1">{group.count}x</span>}
//                           {group.item.role}
//                         </h4>
//                         <p className="text-sm text-gray-600">{group.item.experience}</p>
//                         <p className="text-sm font-medium text-[#009bd7]">
//                           {getPriceTypeDisplay(group.item.priceType)}: ${group.item.price}
//                         </p>
//                       </div>
//                       <div className="flex space-x-1">
//                         {group.count > 1 && (
//                           <span className="text-gray-500 text-xs flex items-center">
//                             × {group.count}
//                           </span>
//                         )}
//                         <button 
//                           onClick={() => handleRemoveGroup(group.ids)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Remove all"
//                         >
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
          
//           <div className="p-4 border-t">
//             {items.length > 0 && (
//               <div className="space-y-2">
//                 <button 
//                   onClick={clearCart}
//                   className="text-gray-600 text-sm hover:text-red-500 w-full text-left"
//                 >
//                   Clear Selection
//                 </button>
//                 <button
//                   onClick={handleHireNow}
//                   className="w-full py-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg transition-all duration-200 hover:from-[#008bc1] hover:to-[#00c7e3]"
//                 >
//                   Hire Now
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// } 

'use client';

import { useCart, CartItem } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function Cart() {
  const { items, removeItem, clearCart, isOpen, toggleCart, closeCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleHireNow = () => {
    // Safe check for window and items
    if (typeof window === 'undefined' || items.length === 0) return;
    
    try {
      // Create message for contact form
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
      window.dispatchEvent(new Event('sessionStorageUpdated'));
      
      // Scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Close cart
        closeCart();
      }
    } catch (error) {
      console.error('Error in handleHireNow:', error);
    }
  };

  // Helper function to group similar items
  const groupSimilarItems = (cartItems: CartItem[]): Record<string, { item: CartItem, count: number, ids: string[] }> => {
    const groups: Record<string, { item: CartItem, count: number, ids: string[] }> = {};
    
    cartItems.forEach(item => {
      // Create a key that identifies similar items (ignoring the unique ID)
      const key = `${item.role}-${item.experience}-${item.priceType}`;
      
      if (groups[key]) {
        groups[key].count += 1;
        groups[key].ids.push(item.id);
      } else {
        groups[key] = { 
          item, 
          count: 1,
          ids: [item.id]
        };
      }
    });
    
    return groups;
  };

  const getPriceTypeDisplay = (priceType: string): string => {
    switch(priceType) {
      case 'fullTime': return 'Full Time';
      case 'hourly': return 'Hourly';
      case 'partTime': return 'Part Time';
      default: return priceType;
    }
  };
  
  // Handle removing all instances of a grouped item
  const handleRemoveGroup = (ids: string[]): void => {
    ids.forEach(id => removeItem(id));
  };

  const totalItems = items.length;

  if (!isClient) return null;

  return (
    <div className="fixed bottom-4 left-4 sm:left-auto sm:right-4 z-50">
      {!isOpen ? (
        <button 
          onClick={toggleCart}
          className="group relative bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#009bd7] to-[#00E1FF] opacity-75 animate-pulse"></div>
          
          {/* Cart icon with animation */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          
          {/* Enhanced badge */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-bounce">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </button>
      ) : (
        <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 w-[90vw] sm:w-96 max-h-[75vh] flex flex-col transform transition-all duration-300 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {/* Enhanced header */}
          <div className="bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Your Selection</h3>
                <p className="text-white/80 text-sm">{totalItems} item{totalItems !== 1 ? 's' : ''} selected</p>
              </div>
            </div>
            <button 
              onClick={toggleCart} 
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Content area */}
          <div className="p-6 overflow-y-auto flex-grow">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg font-medium">Your selection is empty</p>
                <p className="text-gray-400 text-sm mt-2">Browse developers and add them to your selection</p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.values(groupSimilarItems(items)).map((group, index) => (
                  <div 
                    key={`group-${group.item.id}`} 
                    className="group relative bg-gradient-to-r from-white to-gray-50/50 p-4 rounded-xl border border-gray-200/50 hover:border-[#009bd7]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Quantity badge */}
                    {group.count > 1 && (
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        {group.count}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg mb-1">
                          {group.item.role}
                        </h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                            {group.item.experience}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {getPriceTypeDisplay(group.item.priceType)}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-[#009bd7] flex items-center">
                          <span className="text-sm mr-1">$</span>
                          {group.item.price}
                          {group.count > 1 && (
                            <span className="text-sm text-gray-500 ml-2">× {group.count}</span>
                          )}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => handleRemoveGroup(group.ids)}
                        className="ml-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                        title="Remove from selection"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Enhanced footer */}
          <div className="p-6 border-t border-gray-200/50 bg-gray-50/50 rounded-b-2xl">
            {items.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <button 
                    onClick={clearCart}
                    className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Clear All</span>
                  </button>
                  <span className="text-sm text-gray-500">
                    {Object.keys(groupSimilarItems(items)).length} unique role{Object.keys(groupSimilarItems(items)).length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <button
                  onClick={handleHireNow}
                  className="w-full py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-xl transition-all duration-300 hover:from-[#008bc1] hover:to-[#00c7e3] hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hire Now</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}