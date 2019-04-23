import styled from 'styled-components';

const EndLabel = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: rgba(255, 255, 255, 0.8);
  flex: 1;
  z-index: 5;

  &:last-of-type {
    text-align: end;
  }
`;

export default EndLabel;
