import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 50rem;
  height: 20rem;
  cursor: pointer;
  position: relative;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => (props.overBudget ? props.theme.overBudget : props.color)};
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
