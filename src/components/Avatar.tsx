import React from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
};

export const Avatar: React.FC<AvatarProps> = ({ src, name, size = 'md' }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return src ? (
    <img
      src={src}
      alt={name}
      className={`${sizeClasses[size]} rounded-full object-cover shadow-lg`}
    />
  ) : (
    <div
      className={`${sizeClasses[size]} rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-xl shadow-lg`}
    >
      {initials}
    </div>
  );
};