import React from 'react';
import styles from './WorkCard.module.css';
import { MyWork } from '@/entities/portfolio/model';
import Link from 'next/link';

interface WorkCardProps {
  work: MyWork;
  onClick: (work: MyWork) => void;
  isActive: boolean;
}

const WorkCard = ({ work, onClick }: WorkCardProps) => {
  return (
    <div className={styles.workCard}>
      <h3 className={styles.workTitle}>{work.title}</h3>
      {work.image && (
        <div className={styles.imageContainer}>
          <img 
            src={work.image} 
            alt={work.title || 'Work image'} 
            className={styles.workImage}
          />
        </div>
      )}
      <Link 
        href={`/portfolio/details/${work.id}`}
        className={styles.detailsButton}
      >
        Подробнее
      </Link>
    </div>
  );
};

export default WorkCard;