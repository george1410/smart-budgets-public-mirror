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

const CardOne = {
  text: 'Keep track of where your money is going.',
  image: ImageOne,
};
const CardTwo = {
  text: 'See how well your friends manage their budgets.',
  image: ImageTwo,
};
const CardThree = {
  text: 'Collect points by staying below budget.',
  image: ImageThree,
};

const Carousel = ({ show }) => {
  const [slide, setSlide] = useState(0);
  const Cards = [CardOne, CardTwo, CardThree];
  const setCard = (index) => {
    setSlide(index);
  };
  const decrement = () => {
    if (slide !== 0) setSlide(slide - 1);
  };
  const increment = () => {
    if (slide !== Cards.length - 1) setSlide(slide + 1);
  };
  return (
    <Wrapper show={show}>
      {
        Cards.map((card, index) => (
          <SlideCard key={card.text} show={slide === index} text={card.text}>
            <card.image />
          </SlideCard>
        ))
      }
      <CarouselDotRow>
        <div tabIndex="0" role="button" onClick={decrement} onKeyPress={decrement}>
          <Arrow left />
        </div>
        {
          Cards.map((card, index) => (
            <CarouselDot
              tabIndex="0"
              key={card.text}
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
