interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#F3D9D0] text-[#281C1C] hover:bg-[#E8C4B8] border border-[#E8C4B8] shadow-sm hover:shadow-md focus:ring-[#E8C4B8]',
    secondary: 'bg-transparent text-[#281C1C] border border-[#C9B8B0] hover:bg-[#F7EFEB] focus:ring-[#C9B8B0]',
    outline: 'bg-white text-[#281C1C] border border-transparent hover:border-[#E8C4B8] hover:bg-[#F9EFEB] focus:ring-[#E8C4B8]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-7 py-3.5 text-lg rounded-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
