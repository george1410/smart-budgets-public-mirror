import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => (props.overBudget ? props.theme.overBudget : props.theme.white)};
  border: 2px solid ${props => props.theme.white};

  &:hover {
    border: 2px solid ${props => props.theme.primaryBlue};
  }

  &:active {
    transform: scale(0.98);
  }

  ${media.phone`
    width: 100%;
    border-radius: 0;
  `}
`;

export default Wrapper;
