import styled from 'styled-components';

const Title = styled.span`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.black};

  padding: 0 3rem;
  border-bottom: 1px solid ${props => props.theme.black};
  margin-bottom: 3rem;
`;

export default Title;
