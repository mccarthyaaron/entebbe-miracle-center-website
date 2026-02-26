import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-accent text-primary hover:bg-yellow-400 hover:shadow-lg",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
