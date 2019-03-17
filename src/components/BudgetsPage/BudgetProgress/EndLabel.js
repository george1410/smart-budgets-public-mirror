import styled from 'styled-components';

const EndLabel = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.grey};
  flex: 1;
  font-weight: 500;

  &:last-of-type {
    text-align: end;
  }
`;

export default EndLabel;
