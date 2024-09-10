import { FC } from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" {...props}>
      {children}
    </button>
  );
};
