
import React from 'react';
import './ImageGrid.css';

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div className="image-container" key={index}>
          <img src={src} alt={`img-${index}`} className="grid-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
