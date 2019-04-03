import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
  align-items: center;
  width: 100%;
  min-height: 50rem;
  ${media.tablet`
    padding: 0;
    min-height: 40rem;
  `}
`;

const Instruction = styled.span`
  color: ${props => props.theme.offWhite};
  line-height: 2.5rem;
  font-size: ${props => props.theme.fontSmall};
  margin-top: 5rem;
  width: 24rem;
  text-align: center;
  ${media.tablet`
    color: ${props => props.theme.grey};
  `}
`;

const AnimatedWrapper = animated(Wrapper);

const SlideCard = ({ children, text, show }) => {
  const [props, set] = useSpring(() => ({ config: { duration: 0 }, opacity: show ? 1 : 0, display: show ? 'none' : 'flex' }));
  useEffect(() => {
    set({
      config: { duration: 500 },
      to: async (next) => {
        await next({ display: show ? 'flex' : 'none' });
        await next({ opacity: show ? 1 : 0 });
      },
      from: { display: 'none', opacity: 0 },
    });
    return () => (
      set({
        display: 'none',
        opacity: 0,
      })
    );
  });
  return (
    <>
      {
      true
      && (
      <AnimatedWrapper style={props}>
        {children}
        <Instruction>{text}</Instruction>
      </AnimatedWrapper>
      )
    }
    </>
  );
};

SlideCard.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default SlideCard;
