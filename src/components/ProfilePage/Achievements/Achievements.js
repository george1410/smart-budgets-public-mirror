/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import media from '../../../util/mediaQueries';
import api from '../../../api/api';

const Badge = styled.img`
  width: 10rem;
  position: relative;
  border-radius: 10rem;
`;

const Name = styled.div`
  font-weight: 500;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
`;


const Achievements = ({ badges }) => {
  const [allBadges, setAllBadges] = useState();

  useEffect(() => {
    api.get('/api/badges')
      .then(payload => payload.data)
      .then(badgesArray => setAllBadges(badgesArray));
  }, []);

  return (
    <div>
      {
        console.log(allBadges)
      }
      {
        badges.map(badge => (
          <div key={badge.id}>
            <Badge
              data-tip
              data-for={badge.id}
            // eslint-disable-next-line global-require
              src={require(`./badges/${badge.id}.png`)}
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
    </div>
  );
};

Achievements.defaultProps = {
  badges: [],
};

Achievements.propTypes = {};

export default Achievements;
