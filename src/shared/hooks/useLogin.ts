import { useState } from 'react';
import { useAuth } from './useAuth';

export const useLogin = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const isUserDataValid = () => {
    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError(null);
    }
    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError(null);
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isUserDataValid()) {
      const success = await login(username, password);
      if (success !== null) {
        setSuccessMessage('Login successful!');
      } else {
        setSuccessMessage(null);
      }
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.trim() !== '') {
      setUsernameError(null);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim() !== '') {
      setPasswordError(null);
    }
  };

  return {
    username,
    setUsername: handleUsernameChange,
    password,
    setPassword: handlePasswordChange,
    usernameError,
    passwordError,
    successMessage,
    handleSubmit,
  };
};
