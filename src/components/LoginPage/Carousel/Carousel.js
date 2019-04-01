import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../../util/mediaQueries';
// import CardOne from './CardOne';
// import CardTwo from './CardTwo';
import { CarouselDot, CarouselDotRow } from './CarouselDot';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';
import SlideCard from './SlideCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 70rem;
  ${media.tablet`
    display: none;
  `}
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    padding: 4rem;
  `}
`;

const CardOne = (
  <SlideCard text="See where your money is going?">
    <ImageOne />
  </SlideCard>
);

const CardTwo = (
  <SlideCard text="See how well your friends manage their budgets.">
    <ImageTwo />
  </SlideCard>
);

const CardThree = (
  <SlideCard text="Collect points?">
    <ImageThree />
  </SlideCard>
);

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const Slides = [CardOne, CardTwo, CardThree];
  const setCard = (index) => {
    setSlide(index);
  };
  return (
    <Wrapper>
      {
        Slides[slide]
      }
      <CarouselDotRow>
        <CarouselDot highlight={slide === 0} onClick={() => setCard(0)} />
        <CarouselDot highlight={slide === 1} onClick={() => setCard(1)} />
        <CarouselDot highlight={slide === 2} onClick={() => setCard(2)} />
      </CarouselDotRow>
    </Wrapper>
  );
};

Carousel.defaultProps = {};

Carousel.propTypes = {};

export default Carousel;
