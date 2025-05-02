import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (users[email] === password) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      if (users[email]) {
        alert('User already exists!');
      } else {
        setUsers((prev) => ({ ...prev, [email]: password }));
        alert('Signup successful!');
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="auth-background">
      <div className="auth-overlay">
        <div className="auth-container">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
          </form>
          <div className="auth-footer">
            {isLogin ? (
              <p>
                New to Netflix?{' '}
                <button onClick={() => setIsLogin(false)}>Sign up </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)}>Sign in</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
