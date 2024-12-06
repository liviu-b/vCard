import React, { useRef } from 'react';
import { Image } from 'lucide-react';
import { Contact } from '../types/contact';
import { useImageDownload, ImageFormat } from '../hooks/useImageDownload';

interface DownloadButtonProps {
  contact: Contact;
  cardRef: React.RefObject<HTMLDivElement>;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ contact, cardRef }) => {
  const { downloadImage } = useImageDownload({ quality: 1, scale: 2 });
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async (format: ImageFormat) => {
    if (isDownloading) return;

    try {
      setIsDownloading(true);
      const filename = contact.name.toLowerCase().replace(/\s+/g, '-');
      await downloadImage(cardRef.current, format, filename);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleDownload('png')}
        disabled={isDownloading}
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg
          hover:bg-indigo-700 transition-colors duration-200 space-x-2 shadow-md
          hover:shadow-lg active:transform active:scale-95 disabled:opacity-50
          disabled:cursor-not-allowed"
      >
        <Image className="w-5 h-5" />
        <span>Download PNG</span>
      </button>
      
      <button
        onClick={() => handleDownload('jpg')}
        disabled={isDownloading}
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg
          hover:bg-indigo-700 transition-colors duration-200 space-x-2 shadow-md
          hover:shadow-lg active:transform active:scale-95 disabled:opacity-50
          disabled:cursor-not-allowed"
      >
        <Image className="w-5 h-5" />
        <span>Download JPG</span>
      </button>
    </div>
  );
};