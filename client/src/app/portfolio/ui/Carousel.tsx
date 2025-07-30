'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  visibleItems?: number;
}

const Carousel = ({
  children,
  autoPlay = true,
  interval = 3000,
  visibleItems = 3,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const effectiveVisibleItems = Math.min(visibleItems, items.length);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (items.length <= effectiveVisibleItems) return 0;
      return prevIndex >= items.length - effectiveVisibleItems ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (items.length <= effectiveVisibleItems) return 0;
      return prevIndex <= 0 ? items.length - effectiveVisibleItems : prevIndex - 1;
    });
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && items.length > effectiveVisibleItems) {
      timerRef.current = setInterval(goToNext, interval);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [currentIndex, autoPlay, interval, items.length, effectiveVisibleItems]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {items.length > effectiveVisibleItems && (
          <button className={styles.prevButton} onClick={goToPrev}>
            &lt;
          </button>
        )}
        
        <div className={styles.itemsContainer} ref={containerRef}>
          <div
            className={styles.itemsWrapper}
            style={{
              transform: items.length > effectiveVisibleItems 
                ? `translateX(calc(-${currentIndex * (100 / effectiveVisibleItems)}% - ${currentIndex * 20}px))`
                : 'none',
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={styles.carouselItem}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        
        {items.length > effectiveVisibleItems && (
          <button className={styles.nextButton} onClick={goToNext}>
            &gt;
          </button>
        )}
      </div>

      {items.length > effectiveVisibleItems && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: items.length - effectiveVisibleItems + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;