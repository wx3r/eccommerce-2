import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedUser) setUser(savedUser);
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [user, cart]);

  const login = (username) => {
    setUser(username);
    setCart([]);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <UserContext.Provider value={{ user, cart, login, logout, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
