import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return <div>{children}</div>;
};

export default Carousel;
