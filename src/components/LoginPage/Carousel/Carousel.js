import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../util/mediaQueries';
import { CarouselDot, CarouselDotRow, Arrow } from './CarouselDot';
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
  height: 100%;
  ${media.tablet`
    width: 100%;
    display: ${props => (props.show ? 'none' : 'flex')};
  `}
`;

const CardOne = (
  <SlideCard text="Keep track of where your money is going.">
    <ImageOne />
  </SlideCard>
);

const CardTwo = (
  <SlideCard text="See how well your friends manage their budgets.">
    <ImageTwo />
  </SlideCard>
);

const CardThree = (
  <SlideCard text="Collect points by staying below budget.">
    <ImageThree />
  </SlideCard>
);

const Carousel = ({ show }) => {
  const [slide, setSlide] = useState(0);
  const Slides = [CardOne, CardTwo, CardThree];
  const setCard = (index) => {
    setSlide(index);
  };
  const decrement = () => {
    if (slide !== 0) setSlide(slide - 1);
  };
  const increment = () => {
    if (slide !== Slides.length - 1) setSlide(slide + 1);
  };
  return (
    <Wrapper show={show}>
      {
        Slides[slide]
      }
      <CarouselDotRow>
        <div tabIndex="0" role="button" onClick={decrement} onKeyPress={decrement}>
          <Arrow left />
        </div>
        {
          Slides.map((card, index) => (
            <CarouselDot
              tabIndex="0"
              key={card.props.text}
              highlight={slide === index}
              onClick={() => setCard(index)}
              onKeyPress={() => setCard(index)}
            />
          ))
        }
        <div tabIndex="0" role="button" onClick={increment} onKeyPress={increment}>
          <Arrow />
        </div>
      </CarouselDotRow>
    </Wrapper>
  );
};

Carousel.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Carousel;
