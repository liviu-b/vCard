import React, { useRef } from 'react';
import { Contact } from '../types/contact';
import { Avatar } from './Avatar';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';
import { DownloadButton } from './DownloadButton';

interface VCardProps {
  contact: Contact;
}

export const VCard: React.FC<VCardProps> = ({ contact }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div 
        ref={cardRef} 
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
      >
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar src={contact.avatar} name={contact.name} size="lg" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">{contact.name}</h1>
          <p className="text-gray-600">{contact.title}</p>
        </div>

        <div className="space-y-6">
          <ContactInfo
            email={contact.email}
            phone={contact.phone}
            website={contact.website}
            location={contact.location}
          />
          
          <div className="pt-4 border-t border-gray-200">
            <SocialLinks social={contact.social} />
          </div>

          <div className="pt-4 flex justify-center">
            <DownloadButton contact={contact} cardRef={cardRef} />
          </div>
        </div>
      </div>
    </div>
  );
};