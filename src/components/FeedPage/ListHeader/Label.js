import styled from 'styled-components';

const Label = styled.div`
  color: ${props => props.theme.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

export default Label;
