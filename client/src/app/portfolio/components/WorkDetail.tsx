import React from 'react';
import { MyWork } from '@/entities/portfolio/model/index';
import ImageGallery from '../ui/ImageGallery';
import { Button } from '@/shared/ui';

interface WorkDetailProps {
  work: MyWork;
}

const WorkDetail = ({ work }: WorkDetailProps) => {
  const images = work.image ? [work.image] : [];

  return (
    <div>
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 &&
        images.map((image) => (
          <div key={image}>
            <img src={`http://localhost:3001${image}`} alt={work.title} />
            <Button>Описание</Button>
          </div>
        ))}
    </div>
  );
};

export default WorkDetail;
