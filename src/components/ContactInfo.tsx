import React from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  phone: string;
  website?: string;
  location?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  website,
  location,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-gray-600" />
        <a
          href={`mailto:${email}`}
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          {email}
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-gray-600" />
        <a
          href={`tel:${phone}`}
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          {phone}
        </a>
      </div>
      {website && (
        <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-gray-600" />
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            {website}
          </a>
        </div>
      )}
      {location && (
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{location}</span>
        </div>
      )}
    </div>
  );
};