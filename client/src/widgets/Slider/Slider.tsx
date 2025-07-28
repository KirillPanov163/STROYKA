"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

interface Brand {
  name: string;
  logo: string;
}

export default function Slider() {
  const brands: Brand[] = [
    { name: 'Electrolux', logo: '/electrolux-logo.png' },
    { name: 'Samsung', logo: '/samsung-logo.png' },
    { name: 'Subaru', logo: '/subaru-logo.png' },
    { name: 'LG', logo: '/lg-logo.png' },
    { name: 'Sony', logo: '/sony-logo.png' },
    { name: 'Panasonic', logo: '/panasonic-logo.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const visibleItems = 4;
  const transitionDuration = 1000; // Плавная анимация (1 секунда)
  const autoplaySpeed = 3000; // Интервал между переходами (3 секунды)

  // Дублируем элементы для бесшовной прокрутки
  const duplicatedBrands = [...brands, ...brands.slice(0, visibleItems)];

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        // Если достигли конца дублированного массива, незаметно переходим к началу
        if (newIndex >= brands.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, transitionDuration);
          return newIndex;
        }
        return newIndex;
      });
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [brands.length]);

  // Ручное управление
  const handleScroll = (direction: 'left' | 'right') => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (direction === 'left') {
        return prev <= 0 ? brands.length - 1 : prev - 1;
      } else {
        return prev >= brands.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>Наши партнеры</h2>
      
      <div className={styles.sliderWrapper}
           onMouseEnter={() => setIsTransitioning(false)}
           onMouseLeave={() => setIsTransitioning(true)}>
        
        <button 
          onClick={() => handleScroll('left')}
          className={`${styles.arrowButton} ${styles.prev}`}
          aria-label="Предыдущие логотипы"
        >
          <span className={styles.arrowIcon}></span>
        </button>

        <div className={styles.sliderViewport}>
          <div 
            ref={sliderRef}
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: isTransitioning ? `transform ${transitionDuration}ms ease` : 'none',
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className={styles.slide}
                style={{ width: `${100 / visibleItems}%` }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => handleScroll('right')}
          className={`${styles.arrowButton} ${styles.next}`}
          aria-label="Следующие логотипы"
        >
          <span className={styles.arrowIcon}></span>
        </button>
      </div>
    </div>
  );
}