import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface SocialLinksProps {
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => {
  if (!social) return null;

  return (
    <div className="flex space-x-4">
      {social.linkedin && (
        <a
          href={`https://linkedin.com/in/${social.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      )}
      {social.twitter && (
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
      )}
      {social.github && (
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
      )}
    </div>
  );
};