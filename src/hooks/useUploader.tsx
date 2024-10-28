import { useState } from 'react';

const useImageUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const uploadImage = async (file: File, foldername: string) => {
    setUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const url = URL.createObjectURL(file);
    setUploadedUrl(url);
    setUploading(false);
    return url;
  };

  return { uploadImage, uploading, uploadedUrl };
};

export default useImageUploader;
