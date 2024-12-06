export interface Contact {
  name: string;
  title: string;
  email: string;
  phone: string;
  website?: string;
  location?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}