import styled from 'styled-components';
import media from '../../../util/mediaQueries';

export const CarouselDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.highlight ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 20px;
  transition: ${props => props.theme.transition};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  ${media.tablet`
    background-color: ${props => (props.highlight ? props.theme.primaryBlue : 'rgba(0, 0, 0, 0.3)')};
  `}
`;

export const CarouselDotRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
