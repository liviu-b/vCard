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
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div 
        ref={contentRef}
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl"
      >
        <div className="flex flex-col items-center mb-6 text-center">
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
        </div>
      </div>

      <div className="mt-6">
        <DownloadButton contact={contact} cardRef={contentRef} />
      </div>
    </div>
  );
};