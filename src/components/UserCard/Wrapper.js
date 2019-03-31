import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border: 2px solid ${props => props.theme.offWhite};
  border-bottom: 2px solid ${props => props.theme.white};
  background-color: ${props => props.theme.white};
  width: 50rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  transition: ${props => props.theme.transition};

  &:first-of-type {
    border-radius: ${props => props.theme.topCorners};
  }

  &:last-of-type {
    border-radius: ${props => props.theme.bottomCorners};
    border-bottom: 2px solid ${props => props.theme.offWhite};
  }

  &:only-of-type {
    border-radius: ${props => props.theme.borderRadius};
  }

  &:hover {
    border: 2px solid ${props => (props.type === 'friends' ? props.theme.primaryBlue : 'none')};
    cursor: ${props => (props.type === 'friends' ? 'pointer' : 'default')};
  }

  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};

    &:hover {
      border: 2px solid ${props => (props.type === 'friends' ? props.theme.offWhite : 'none')};
      border-bottom: 2px solid ${props => (props.type === 'friends' ? props.theme.white : 'none')};
      cursor: ${props => (props.type === 'friends' ? 'pointer' : 'default')};
    }

    &:first-of-type {
      border-radius: 0;
    }

    &:last-of-type {
      border-radius: 0;
      border-bottom: 2px solid ${props => props.theme.offWhite};
    }

    &:only-of-type {
      border-radius: ${props => props.theme.borderRadius};
    }
  `}
`;

export default Wrapper;
