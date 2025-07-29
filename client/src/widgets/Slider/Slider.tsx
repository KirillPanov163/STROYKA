'use client';

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
  const [visibleItems, setVisibleItems] = useState(4);
  const transitionDuration = 1000;
  const autoplaySpeed = 3000;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Создаем расширенный массив для бесшовной прокрутки
  const extendedBrands = [...brands, ...brands.slice(0, visibleItems)];

  // Адаптивность
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 576) setVisibleItems(2);
      else if (width < 768) setVisibleItems(3);
      else setVisibleItems(4);
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Автопрокрутка с бесшовным переходом
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        
        // Когда достигаем конца оригинального массива
        if (newIndex >= brands.length) {
          // После анимации мгновенно возвращаемся к началу без анимации
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, transitionDuration);
        }
        return newIndex;
      });
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [brands.length, visibleItems]);

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>Наши партнеры</h2>
      <div className={styles.sliderWrapper}
           onMouseEnter={() => setIsTransitioning(false)}
           onMouseLeave={() => setIsTransitioning(true)}>
        <div className={styles.sliderViewport}>
          <div
            ref={sliderRef}
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: isTransitioning ? `transform ${transitionDuration}ms ease` : 'none',
            }}
          >
            {extendedBrands.map((brand, index) => (
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
      </div>
    </div>
  );
}