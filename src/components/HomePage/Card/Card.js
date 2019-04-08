import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  max-height: 30rem;
  height: 8rem;
  width: 20rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.offWhite};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.cardShadow};
  transition: ${props => props.theme.transition};
  margin-bottom: 3rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);
      box-shadow: ${props => props.theme.cardShadow};
    }

    &:active {
      transform: scale(0.95);
      box-shadow: none;
    }
  `}
  ${media.phone`
    height: auto;
    width: 80%;
  `}
`;

const Title = styled.span`
  color: ${props => props.theme.black};
  font-weight: 500;
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
`;

const Card = ({
  title,
  linkTo,
  history,
}) => {
  const routeTo = () => history.push(linkTo);
  return (
    <Wrapper onClick={routeTo} onKeyPress={routeTo} tabIndex="0">
      <Title>{title}</Title>
    </Wrapper>

  );
};

Card.defaultProps = {};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Card);
