import styled from 'styled-components';

const Title = styled.span`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.primaryBlue};
  padding: 0 3rem;
  border-bottom: 1px solid ${props => props.theme.primaryBlue};
  margin-bottom: 3rem;
`;

export default Title;
