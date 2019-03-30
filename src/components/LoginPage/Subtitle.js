import styled from 'styled-components';

const Subtitle = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => (props.err ? props.theme.error : props.theme.grey)};
  margin: 3rem 0;
`;

export default Subtitle;
