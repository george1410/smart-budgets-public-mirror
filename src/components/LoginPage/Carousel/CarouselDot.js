import styled from 'styled-components';

export const CarouselDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.highlight ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 20px;
  transition: ${props => props.theme.transition};
`;

export const CarouselDotRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
