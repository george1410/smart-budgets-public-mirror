import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import RowWrapper from './RowWrapper';
import Title from './Title';

const SocialSection = ({ children }) => (
  <>
    <Wrapper>
      <Title>
      Social
      </Title>
      <RowWrapper>
        {
          children
        }
      </RowWrapper>
    </Wrapper>
  </>
);

SocialSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Object),
  ]).isRequired,
};

export default SocialSection;
