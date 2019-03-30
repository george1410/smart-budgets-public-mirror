import styled from 'styled-components';

const Title = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  flex: 1;
  text-align: center;
  margin-right: ${props => (props.shift ? '4rem' : '0')};
`;

export default Title;
