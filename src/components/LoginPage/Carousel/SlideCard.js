import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    display: none;
  `}
`;

const Instruction = styled.span`
  color: ${props => props.theme.offWhite};
  line-height: 2.5rem;
  font-size: ${props => props.theme.fontSmall};
  margin-top: 5rem;
  width: 50%;
  text-align: center;
`;

const SlideCard = ({ children, text }) => (
  <Wrapper>
    {children}
    <Instruction>{text}</Instruction>
  </Wrapper>
);

SlideCard.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  text: PropTypes.string.isRequired,
};

export default SlideCard;
