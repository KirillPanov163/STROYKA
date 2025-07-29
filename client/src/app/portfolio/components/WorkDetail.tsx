import React from 'react';
import { MyWorkType } from '@/entities/portfolio/model/index';
import ImageGallery from '../ui/ImageGallery';
import { Button } from '@/shared/ui';

interface WorkDetailProps {
  work: MyWorkType;
}

const WorkDetail = ({ work }: WorkDetailProps) => {
  const images = work.image ? [work.image] : [];

  return (
    <div>
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 &&
        images.map((image) => (
          <div key={image}>
            <img src={image} alt={work.title} />
            <Button>Описание</Button>
          </div>
        ))}
    </div>
  );
};

export default WorkDetail;
