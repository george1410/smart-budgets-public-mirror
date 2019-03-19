import styled from 'styled-components';

const Name = styled.span`
  color: ${props => props.theme.black};
  flex: 2;
  text-align: center;
  font-size: ${props => props.theme.fontSmall};
  margin-right: 50px;
`;

export default Name;
