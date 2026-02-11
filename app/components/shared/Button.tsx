import { Link } from '@remix-run/react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
}: ButtonProps) {
  const baseClasses = `btn ${variant === 'primary' ? 'btn-primary' : ''} ${className}`;

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
