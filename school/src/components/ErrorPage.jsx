import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <button onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  );
};

export default ErrorPage;
