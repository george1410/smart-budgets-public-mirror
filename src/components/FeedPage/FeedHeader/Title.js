import styled from 'styled-components';

const Title = styled.span`
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontSmall};
  user-select: none;
`;

export default Title;
