/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import media from '../../../util/mediaQueries';
import api from '../../../api/api';
import createBadgeDisplay from './createDisplay';

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  width: 40rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Title = styled.div`
  padding: 1rem 2rem;
  height: 5rem;
  background-color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border-radius: ${props => props.theme.topCorners};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
`;

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: calc((40rem - 4px - (3*10rem)) / 4);
  padding-left: calc((40rem - 4px - (3*10rem)) / 4);
`;

const Badge = styled.img`
  width: 10rem;
  position: relative;
  border-radius: 10rem;
  margin-top: calc((40rem - 4px - (3*10rem)) / 4);
  margin-right: calc((40rem - 4px - (3*10rem)) / 4);
  ${media.phone`
    width: calc((100vw - 4rem - 4px - (40rem - 4px - (3*10rem))) / 3);
  `}
  ${media.tiny`
    width: calc((100vw - 4rem - 4px - (40rem - 4px - (3*10rem))) / 2);
  `}
`;

const Name = styled.div`
  font-weight: 500;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
  width: 20rem;
`;


const Achievements = ({ badges }) => {
  const [finalBadges, setFinalBadges] = useState([]);

  useEffect(() => {
    api.get('/api/badges')
      .then(payload => payload.data)
      .then((allBadges) => {
        setFinalBadges(createBadgeDisplay(badges, allBadges));
      });
  }, [badges]);

  return (
    <Wrapper>
      <Title>Achievements</Title>
      <Display>
        {
        finalBadges.map(badge => (
          <div key={badge.id}>
            <Badge
              data-tip
              data-for={badge.id}
            // eslint-disable-next-line global-require
              src={require(`${badge.src}`)}
              alt={badge.name}
            />
            <ReactTooltip id={badge.id.toString()} type="dark">
              <Name>{badge.name}</Name>
              <br />
              <Description>{badge.description}</Description>
            </ReactTooltip>
          </div>
        ))
      }
      </Display>
    </Wrapper>
  );
};

Achievements.defaultProps = {
  badges: [],
};

Achievements.propTypes = {
  badges: PropTypes.instanceOf(Array),
};

export default Achievements;
