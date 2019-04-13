import styled from 'styled-components';

const MainLabel = styled.span`
  color: ${props => (props.overBudget ? props.theme.error : props.theme.white)};
  font-size: ${props => props.theme.fontMedium};
  text-align: center;
  align-self: center;
  width: 33.3%;
  font-weight: 500;
`;

export default MainLabel;
