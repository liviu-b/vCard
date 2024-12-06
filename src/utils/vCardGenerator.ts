import { Contact } from '../types/contact';

export const generateVCardData = (contact: Contact): string => {
  const vCardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.name}`,
    `TITLE:${contact.title}`,
    `EMAIL:${contact.email}`,
    `TEL:${contact.phone}`,
  ];

  if (contact.website) {
    vCardLines.push(`URL:https://${contact.website}`);
  }

  if (contact.location) {
    vCardLines.push(`ADR;TYPE=WORK:;;${contact.location}`);
  }

  if (contact.social) {
    if (contact.social.linkedin) {
      vCardLines.push(`X-SOCIALPROFILE;TYPE=linkedin:https://linkedin.com/in/${contact.social.linkedin}`);
    }
    if (contact.social.twitter) {
      vCardLines.push(`X-SOCIALPROFILE;TYPE=twitter:https://twitter.com/${contact.social.twitter}`);
    }
    if (contact.social.github) {
      vCardLines.push(`X-SOCIALPROFILE;TYPE=github:https://github.com/${contact.social.github}`);
    }
  }

  if (contact.avatar) {
    vCardLines.push(`PHOTO;VALUE=URI:${contact.avatar}`);
  }

  vCardLines.push('END:VCARD');
  return vCardLines.join('\n');
};