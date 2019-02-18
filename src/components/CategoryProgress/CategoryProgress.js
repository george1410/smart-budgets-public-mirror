import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 0 2rem;
  width: 50rem;
  ${media.phone`
    width: 100%;
  `}
`;

const CategoryTitle = styled.span`
  text-align: center;
  align-self: stretch;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.primaryBlue};
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: baseline;
`;

const LabelEnd = styled.span`
  color: ${props => props.theme.grey};
  font-size: ${props => props.theme.fontSmall};
  flex: 1;

  &:last-of-type {
    text-align: end;
  }
`;

const LabelMain = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMedium};
`;

const ProgressBar = styled.div`
  vertical-align: middle;
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.theme.primaryBlue};
`;

const Progress = styled.div`
  height: 1rem;
  width: calc(${props => props.spend} / ${props => props.budget} * 100%);
  background-color: ${props => props.theme.primaryBlue};
  transition: width 0.3s ease-in-out;
`;

const CategoryProgress = ({ displayName, spend, budget }) => (
  <Wrapper>
    <CategoryTitle>{displayName.toLowerCase()}</CategoryTitle>
    <LabelWrapper>
      <LabelEnd>
        {spend}
        {' spent'}
      </LabelEnd>
      <LabelMain>
        {budget - spend}
        {' left'}
      </LabelMain>
      <LabelEnd>
        {'of '}
        {budget}
      </LabelEnd>
    </LabelWrapper>
    <ProgressBar>
      <Progress spend={spend} budget={budget} />
    </ProgressBar>
  </Wrapper>
);

CategoryProgress.propTypes = {
  displayName: PropTypes.string.isRequired,
  spend: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
};

export default CategoryProgress;
