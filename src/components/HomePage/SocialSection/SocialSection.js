import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Title from './Title';

const SocialSection = ({ children }) => (
  <>
    <Title>
      Social
    </Title>
    <Wrapper>
      {
        children
      }
    </Wrapper>
  </>
);

SocialSection.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default SocialSection;
