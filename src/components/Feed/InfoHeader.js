import React from 'react';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSmall};
  justify-content: space-between;
  width: 50rem;
  padding: 1rem 2rem;
  box-shadow: 0 1px 0 ${props => props.theme.primaryBlue};
  ${media.phone`
    width: 100%;
  `}
`;

const Label = styled.div`
  color: ${props => props.theme.primaryBlue};
`;

const InfoHeader = () => (
  <Wrapper>
    <Label>Date</Label>
    <Label>Amount</Label>
  </Wrapper>
);

export default InfoHeader;
