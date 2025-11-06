import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'pink' | 'lavender' | 'peach' | 'gray';
  className?: string;
};

export default function Badge({
  children,
  variant = 'pink',
  className = '',
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold font-primary transition-colors duration-200';

  const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
    pink: 'bg-pink-100 text-pink-700 border border-pink-200',
    lavender: 'bg-purple-100 text-purple-700 border border-purple-200',
    peach: 'bg-orange-100 text-orange-700 border border-orange-200',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
