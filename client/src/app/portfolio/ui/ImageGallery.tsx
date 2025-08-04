import React from 'react';

interface ImageGalleryProps {
  images: string[] | undefined;
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  if (!images) return null;

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={`http://localhost:3001${image}`} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
