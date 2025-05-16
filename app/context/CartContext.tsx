'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type CartItem = {
  id: string;
  role: string;
  experience: string;
  priceType: 'fullTime' | 'hourly' | 'partTime';
  price: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize cart from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      try {
        setItems(JSON.parse(storedItems));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        setItems([]);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = (item: CartItem) => {
    // Generate a unique ID using timestamp to allow duplicates
    const uniqueId = `${item.id}-${Date.now()}`;
    const itemWithUniqueId = { ...item, id: uniqueId };
    
    // Add item without checking for duplicates
    setItems([...items, itemWithUniqueId]);
    setIsOpen(true); // Open cart when item is added
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const openCart = () => {
    setIsOpen(true);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      clearCart, 
      isOpen, 
      toggleCart,
      closeCart,
      openCart
    }}>
      {children}
    </CartContext.Provider>
  );
}; 