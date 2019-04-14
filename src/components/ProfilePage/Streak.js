import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const StreakWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 5rem;
  border: 1px solid ${props => props.theme.offWhite};
  width: 40rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  outline: ${props => (!props.info && 'none')};
  cursor: ${props => (props.info ? 'pointer' : 'normal')};
  user-select: none;
  transition: ${props => props.theme.transition};

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
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};
    border-radius: 0;
    ${media.tablet`
      &:hover {
        transform: scale(1);
        box-shadow: ${props => props.theme.bottomShadow};
      }

      &:active {
        transform: scale(0.95);
        box-shadow: none;
      }
    `}
  `}
`;

const StreakInfo = styled.div`
  font-size: 1.4rem;
  height: 10rem;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Streak = ({ streak, info }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
  };
  return (
    <>
      <StreakWrapper
        info={info}
        onClick={info ? toggleInfo : undefined}
        onKeyPress={info ? toggleInfo : undefined}
        tabIndex={info ? 0 : -1}
      >
        <span>Your current streak:</span>
        {' '}
        {streak}
        {
        streak === 0
          ? ('❄️')
          : ('🔥')
      }
      </StreakWrapper>
      {
        infoOpen
        && (
          <StreakInfo>
            {'ℹ️Don\'t go over any of your budgets during the budgeting period to increase your streak.'}
          </StreakInfo>
        )
      }
    </>
  );
};

Streak.defaultProps = {
  streak: -1,
  info: false,
};

Streak.propTypes = {
  streak: PropTypes.number,
  info: PropTypes.bool,
};

export default Streak;
