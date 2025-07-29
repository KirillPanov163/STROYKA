import React from 'react';
import Button from '../ui/portfolioButton';
import { MyWorkType } from '@/entities/portfolio/model';

interface WorkCardProps {
  work: MyWorkType;
  onClick: (work: MyWorkType) => void;
}

const WorkCard = ({ work, onClick }: WorkCardProps) => {
  return (
    <div>
      <img src={work.image} alt={work.title} />
      <Button onClick={() => onClick(work)}>Подробнее</Button>
    </div>
  );
};

export default WorkCard;
