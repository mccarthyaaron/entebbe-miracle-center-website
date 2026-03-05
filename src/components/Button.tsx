import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white border-black hover:bg-neutral-800 hover:border-neutral-800",
    secondary: "bg-transparent border-white/35 text-white hover:bg-white hover:text-black hover:border-white",
    outline: "bg-white text-black border-black/20 hover:bg-black hover:text-white hover:border-black"
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
