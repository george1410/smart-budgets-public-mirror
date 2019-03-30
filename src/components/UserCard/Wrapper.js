import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  border-bottom: none;
  background-color: ${props => props.theme.white};
  width: 50rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};

  &:first-of-type {
    border-radius: ${props => props.theme.topCorners};
  }

  &:last-of-type {
    border-radius: ${props => props.theme.bottomCorners};
    border-bottom: 1px solid ${props => props.theme.offWhite};
  }

  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};

    &:first-of-type {
      border-radius: 0;
    }

    &:last-of-type {
      border-radius: 0;
      border-bottom: 1px solid ${props => props.theme.offWhite};
    }
  `}
`;

export default Wrapper;
