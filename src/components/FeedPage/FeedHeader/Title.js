import styled from 'styled-components';

const Title = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  user-select: none;
  font-weight: 500;
`;

export default Title;
