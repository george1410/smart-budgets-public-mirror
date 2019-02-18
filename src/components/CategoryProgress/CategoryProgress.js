import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 70%;
  ${media.tablet`
    width: 80%;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const CategoryTitle = styled.p`
  text-align: center;
  align-self: stretch;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.primaryBlue};
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: baseline;
`;

const LabelEnd = styled.p`
  color: ${props => props.theme.grey};
  font-size: ${props => props.theme.fontSmall};
  margin: 0 0;
  flex: 1;

  &:last-of-type {
    text-align: end;
  }
`;

const LabelMain = styled.p`
  color: ${props => props.theme.black};
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 0;
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

const CategoryProgress = ({ title, spend, budget }) => (
  <Wrapper>
    <CategoryTitle>{title}</CategoryTitle>
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
  title: PropTypes.string.isRequired,
  spend: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
};

export default CategoryProgress;
