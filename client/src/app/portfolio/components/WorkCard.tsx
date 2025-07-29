import React from 'react';
import Button from '../ui/portfolioButton';
import { MyWork } from '@/entities/portfolio/model';

interface WorkCardProps {
  work: MyWork;
  onClick: (work: MyWork) => void;
  isActive: boolean
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
