'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BrandsSlider.module.css';

// Данные брендов
const brands = [
  {
    id: 1,
    name: 'Daikin',
    logo: '/images/brands/daikin.png',
    alt: 'Daikin - системы кондиционирования',
  },
  {
    id: 2,
    name: 'Mitsubishi',
    logo: '/images/brands/mitsubishi.png',
    alt: 'Mitsubishi Electric - климатическое оборудование',
  },
  {
    id: 3,
    name: 'LG',
    logo: '/images/brands/lg.png',
    alt: 'LG - кондиционеры и вентиляция',
  },
  {
    id: 4,
    name: 'Samsung',
    logo: '/images/brands/samsung.png',
    alt: 'Samsung - климатические системы',
  },
  {
    id: 5,
    name: 'Panasonic',
    logo: '/images/brands/panasonic.png',
    alt: 'Panasonic - системы вентиляции',
  },
  {
    id: 6,
    name: 'Fujitsu',
    logo: '/images/brands/fujitsu.png',
    alt: 'Fujitsu - кондиционирование воздуха',
  },
  {
    id: 7,
    name: 'Toshiba',
    logo: '/images/brands/toshiba.png',
    alt: 'Toshiba - климатическое оборудование',
  },
  {
    id: 8,
    name: 'Gree',
    logo: '/images/brands/gree.png',
    alt: 'Gree - системы кондиционирования',
  },
];

const BrandsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Скорость прокрутки

    const animate = () => {
      if (!isAutoScrolling.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      scrollPosition += scrollSpeed;

      // Проверяем, достигли ли мы конца
      if (scrollPosition >= slider.scrollWidth / 2) {
        scrollPosition = 0;
      }

      slider.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Останавливаем автопрокрутку при наведении
    const handleMouseEnter = () => {
      isAutoScrolling.current = false;
    };

    const handleMouseLeave = () => {
      isAutoScrolling.current = true;
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Дублируем бренды для бесконечной прокрутки
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className={styles.brandsContainer}>
      <h2 className={styles.title}>Мы работаем с ведущими брендами</h2>

      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className={styles.slider}>
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.id}-${index}`} className={styles.slide}>
              <div className={styles.brandCard}>
                <div className={styles.logoContainer}>
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={120}
                    height={60}
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                      // Fallback если изображение не загрузилось
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="${styles.brandName}">${brand.name}</div>`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
};

export default BrandsSlider;
