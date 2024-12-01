import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/Header.css';

const Header = () => {
  const { user, login, logout } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      login(username);
      setUsername('');
    }
  };

  return (
    <nav className="header">
      <div className="header-logo">SoleShoe</div>
      <ul className="header-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="auth-section">
        {user ? (
          <>
            <span>Welcome, {user}!</span>
            <button onClick={logout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
