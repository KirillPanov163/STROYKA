'use client';

import { Carousel, Image } from 'antd/es';
import styles from './styles/WorkDetails.module.css';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:4000';
  const validImages = Array.isArray(images) ? images : [];

  return (
    <div className={styles.carousel}>
      {validImages.length > 0 ? (
        <Carousel
          arrows
          autoplay={true}
          autoplaySpeed={3000}
          className={styles.carouselTrack}
        >
          {validImages.map((img: string, index: number) => (
            <div key={index} className={styles.carouselSlide}>
              <Image
                alt={`${title} image ${index + 1}`}
                src={img.startsWith('/') ? `${baseUrl}${img}` : img}
                className={styles.carouselImage}
                width={600}
                height={400}
                onError={() => console.error(`Failed to load image: ${img}`)}
                preview={true}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className={styles.placeholder}>No Images</div>
      )}
    </div>
  );
}
