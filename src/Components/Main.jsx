import React from 'react'
import Hero from './Hero'
import HeroSlider from './HeroSlider';
import Virtual from './Virtual';
import Features from './Features';
import Review from './Review';
import ReviewSlider from "./ReviewSlider";


function Main() {
  return (
    <main>
      <Hero />
      <HeroSlider />
      <Virtual />
      <Features />
      <Review/>
      <ReviewSlider />
    </main>
  );
}

export default Main
