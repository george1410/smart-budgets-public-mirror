import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  max-height: 30rem;
  height: 15rem;
  width: 20rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
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

  ${media.phone`
    width: 80%;
  `}
`;

const Title = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
`;

const Description = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
`;

const Action = styled.span`
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontSmall};
  border-bottom: 1px solid ${props => props.theme.primaryBlue};
  align-self: flex-end;
`;

const Card = ({
  title,
  description,
  linkTo,
  action,
  history,
}) => {
  const routeTo = () => history.push(linkTo);
  return (
    <Wrapper onClick={routeTo}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action>{action}</Action>
    </Wrapper>

  );
};

Card.defaultProps = {};

Card.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Card);
