import { useEffect, useState } from 'react';
import { AuthService } from '../../core/services/AuthService';

export const useAuth = () => {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const subscription = AuthService.session$.subscribe(setSession);
    return () => subscription.unsubscribe();
  }, []);

  return {
    session,
    login: AuthService.login,
    logout: AuthService.logout
  };
};
