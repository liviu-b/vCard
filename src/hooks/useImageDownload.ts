import { useCallback } from 'react';
import { toPng, toJpeg } from 'html-to-image';

export type ImageFormat = 'png' | 'jpg';

interface UseImageDownloadOptions {
  quality?: number;
  scale?: number;
}

export const useImageDownload = (options: UseImageDownloadOptions = {}) => {
  const { quality = 1, scale = 2 } = options;

  const downloadImage = useCallback(async (
    element: HTMLElement | null,
    format: ImageFormat,
    filename: string
  ) => {
    if (!element) {
      throw new Error('Element not found');
    }

    try {
      const config = {
        quality,
        pixelRatio: scale,
        backgroundColor: '#ffffff',
      };

      const dataUrl = format === 'png'
        ? await toPng(element, config)
        : await toJpeg(element, config);

      const link = document.createElement('a');
      link.download = `${filename}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      throw new Error(`Failed to generate ${format.toUpperCase()} image`);
    }
  }, [quality, scale]);

  return { downloadImage };
};