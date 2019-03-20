import styled from 'styled-components';

const Title = styled.span`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  padding: 0 3rem;
  border-bottom: 1px solid ${props => props.theme.white};
  margin-bottom: 3rem;
`;

export default Title;
