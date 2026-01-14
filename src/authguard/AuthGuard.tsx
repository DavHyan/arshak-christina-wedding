import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      navigate('/admin', { replace: true });
    }
  }, [navigate]);

  // While checking token, you can show loader
  if (isAuthorized === null) {
    return <p>Loading...</p>;
  }

  return <>{isAuthorized && children}</>;
};

export default PrivateRoute;
