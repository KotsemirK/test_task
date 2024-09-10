import { Label } from '@radix-ui/react-label';
import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | null;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  errorMessage,
  placeholder = '',
}) => {
  return (
    <div>
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export default Input;
