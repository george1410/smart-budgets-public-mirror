import styled from 'styled-components';

const MainLabel = styled.span`
  color: ${props => (props.overBudget ? props.theme.error : props.theme.black)};
  font-size: ${props => props.theme.fontMedium};
  text-align: center;
  align-self: stretch;
  font-weight: 500;
`;

export default MainLabel;
