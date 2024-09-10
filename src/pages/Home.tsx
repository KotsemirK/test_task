import React from 'react';
import { useAuth } from '../shared/hooks/useAuth';
import { Button } from '../shared/ui/Button';

const Home: React.FC = () => {
  const { session, logout } = useAuth();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Home</h1>
      <p
        className={`mb-4 text-sm font-medium ${session ? 'text-green-600' : 'text-red-500'
          }`}
      >
        Current session: {session ? session : 'Not logged in'}
      </p>
      {session && <Button onClick={logout}>Logout</Button>}
    </div>
  );
};

export default Home;
