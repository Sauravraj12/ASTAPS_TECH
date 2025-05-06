import React, { useEffect, useState } from 'react';
import './HeroBanner.css';

const banners = [
  {
    id: 1,
    title: 'Talent',
    subtitle: 'Empowering Talent, Driving Business Success.',
    image: '../',
  },
  {
    id: 2,
    title: 'Strategy',
    subtitle: 'Empowering Talent, Driving Business Success.',
    image: '/images/banner2.png',
  },
  {
    id: 3,
    title: 'Development',
    subtitle: 'Empowering Talent, Driving Business Success.',
    image: '/images/banner3.png',
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      <img src={banners[current].image} alt={banners[current].title} className="banner-image" />
      <div className="banner-text">
        <h2>{banners[current].title}</h2>
        <p>{banners[current].subtitle}</p>
      </div>
    </div>
  );
};

export default BannerSlider;
