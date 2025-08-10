'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Slider.module.css';

interface Brand {
  name: string;
  logoBaseName: string; // Базовое имя файла без расширения
}

export default function Slider() {
  const brands: Brand[] = [
    { name: 'Electrolux', logoBaseName: 'electrolux-logo' },
    { name: 'Samsung', logoBaseName: 'samsung-logo' },
    { name: 'Mitsubishi', logoBaseName: 'mitsubishi-logo' },
    { name: 'LG', logoBaseName: 'lg-logo' },
    { name: 'Sony', logoBaseName: 'sony-logo' },
    { name: 'Panasonic', logoBaseName: 'panasonic-logo' },
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
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;

        if (newIndex >= brands.length) {
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

  // Функция для генерации srcSet с разными размерами и WebP
  const getSrcSet = (baseName: string) => {
    return `
      /${baseName}-120.webp 120w,
      /${baseName}-240.webp 240w,
      /${baseName}-480.webp 480w
    `;
  };

  // Пример размеров для лого (ширина x высота в px)
  const logoSizes: Record<string, { width: number; height: number }> = {
    'electrolux-logo': { width: 120, height: 27 },
    'samsung-logo': { width: 120, height: 18 },
    'mitsubishi-logo': { width: 56, height: 60 },
    'lg-logo': { width: 120, height: 53 },
    'sony-logo': { width: 120, height: 21 },
    'panasonic-logo': { width: 120, height: 18 },
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderWrapper}
        onMouseEnter={() => setIsTransitioning(false)}
        onMouseLeave={() => setIsTransitioning(true)}
      >
        <div className={styles.sliderViewport}>
          <div
            ref={sliderRef}
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              transition: isTransitioning ? `transform ${transitionDuration}ms ease` : 'none',
            }}
          >
            {extendedBrands.map((brand, index) => {
              const { width, height } = logoSizes[brand.logoBaseName] || { width: 120, height: 30 };
              return (
                <div
                  key={`${brand.name}-${index}`}
                  className={styles.slide}
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <img
                    src={`/${brand.logoBaseName}.webp`}
                    srcSet={getSrcSet(brand.logoBaseName)}
                    sizes="(max-width: 576px) 60px, (max-width: 768px) 90px, 120px"
                    alt={brand.name}
                    width={width}
                    height={height}
                    className={styles.logo}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
