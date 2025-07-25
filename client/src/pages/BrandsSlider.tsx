'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../app/page.module.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function BrandsSlider() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      <div className={styles.brandSlide}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Mitsubishi_logo.svg"
          alt="Mitsubishi"
          width={100}
          height={40}
        />
      </div>
      <div className={styles.brandSlide}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Electrolux_logo.svg"
          alt="Electrolux"
          width={100}
          height={40}
        />
      </div>
      <div className={styles.brandSlide}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
          alt="Samsung"
          width={100}
          height={40}
        />
      </div>
      <div className={styles.brandSlide}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Subaru_logo.svg"
          alt="Subaru"
          width={100}
          height={40}
        />
      </div>
    </Slider>
  );
}
